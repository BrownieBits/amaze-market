import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  UserCredential,
} from 'firebase/auth';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { auth } from '../Firebase/firebase';

type Nullable<T> = T | null;
export interface IUser {
  uid: string | null;
  email: string | null;
  displayName: string | null;
  profileImage: string | null;
}
type authContextType = {
  user: Nullable<IUser>;
  signIn: (email: string, password: string) => Promise<UserCredential> | void;
  signUp: (email: string, password: string) => Promise<UserCredential> | void;
  logOut: () => void;
  updateUserInfo: () => void;
};
const authContextDefaultValues: authContextType = {
  user: null,
  signIn: () => {},
  signUp: () => {},
  logOut: () => {},
  updateUserInfo: () => {},
};
const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
  return useContext(AuthContext);
}

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          profileImage: user.photoURL,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [user]);

  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = async () => {
    await signOut(auth);
  };
  const updateUserInfo = () => {
    updateProfile(auth.currentUser!, {
      displayName: 'Jane Q. User',
      photoURL:
        'https://lh3.googleusercontent.com/ogw/AOh-ky3wZTIgQYb4j7VijE0hwgKEbL8gfarj8YkiVPZQ=s32-c-mo',
    });
  };
  const value = {
    user,
    signIn,
    signUp,
    logOut,
    updateUserInfo,
  };
  return (
    <>
      <AuthContext.Provider value={value}>
        {loading ? null : children}
      </AuthContext.Provider>
    </>
  );
}

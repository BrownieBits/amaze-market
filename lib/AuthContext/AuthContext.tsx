import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
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
interface IUser {
  uid: string | null;
  email: string | null;
  displayName: string | null;
}
type authContextType = {
  user: Nullable<IUser>;
  signIn: (email: string, password: string) => Promise<UserCredential> | void;
  signUp: (email: string, password: string) => Promise<UserCredential> | void;
  logOut: () => void;
};
const authContextDefaultValues: authContextType = {
  user: null,
  signIn: () => {},
  signUp: () => {},
  logOut: () => {},
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

  const value = {
    user,
    signIn,
    signUp,
    logOut,
  };
  return (
    <>
      <AuthContext.Provider value={value}>
        {loading ? null : children}
      </AuthContext.Provider>
    </>
  );
}

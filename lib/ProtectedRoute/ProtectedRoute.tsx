import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../AuthContext/AuthContext';

export interface IProtectedRoute {
  children: any;
}

const ProtectedRoute: React.FC<IProtectedRoute> = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth();
  useEffect(() => {
    if (!user) {
      router.push('/signin');
    }
  }, [router, user]);

  return <>{user ? children : null}</>;
};

export default ProtectedRoute;

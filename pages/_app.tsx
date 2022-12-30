import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { AuthProvider } from '../lib/AuthContext/AuthContext';
import { initFirebase } from '../lib/Firebase/firebase';
import ProtectedRoute from '../lib/ProtectedRoute/ProtectedRoute';
import './globals.scss';
import { NextPageWithLayout } from './page';

library.add(fas, fab);
const noAuthRequired = ['/', '/signin', '/signup'];

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  const router = useRouter();
  initFirebase();

  return (
    <AuthProvider>
      <ThemeProvider enableSystem={true}>
        {noAuthRequired.includes(router.pathname) ? (
          getLayout(<Component {...pageProps} />)
        ) : (
          <ProtectedRoute>
            {getLayout(<Component {...pageProps} />)}
          </ProtectedRoute>
        )}
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;

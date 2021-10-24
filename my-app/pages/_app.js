import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'

import { AuthUserProvider } from '../contexts/AuthContext';

function MyApp({ Component, pageProps }) {
  return <AuthUserProvider><Component {...pageProps} /></AuthUserProvider>;
}

export default MyApp

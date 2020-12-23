import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/globals.css';
import { ThemeProvider } from '@emotion/react';

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={{}}>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp

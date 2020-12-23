import { ThemeProvider } from '@emotion/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import 'styles/globals.css';

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={{}}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

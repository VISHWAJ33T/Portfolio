import PropTypes from 'prop-types';
// provider
import { ScrollProvider } from '../context/ScrollContext';
// style
import '../styles/globals.css';
// import FlareCursor from "../components/FlareCursor";
import { Analytics } from '@vercel/analytics/react';

export default function MyApp({ Component, pageProps }) {
  return (
    <ScrollProvider>
      <Component {...pageProps} />
      {/* <FlareCursor/> */}
      <Analytics />
    </ScrollProvider>
  );
}

// ---------------------------------------

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
  emotionCache: PropTypes.object,
};

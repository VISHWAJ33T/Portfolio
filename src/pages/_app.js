import PropTypes from 'prop-types';
// provider
import { ScrollProvider } from '../context/ScrollContext';
// style
import '../styles/globals.css';
// import FlareCursor from "../components/FlareCursor";
export default function MyApp({ Component, pageProps }) {
  return (
    <ScrollProvider>
      <Component {...pageProps} />
      {/* <FlareCursor/> */}
    </ScrollProvider>
  );
}

// ---------------------------------------

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
  emotionCache: PropTypes.object,
};

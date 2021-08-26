import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from '../theme';

import '../styles/globals.css';
import 'macro-css';

function MyApp({ Component, pageProps }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </MuiThemeProvider>
  );
}

export default MyApp;

import Head from 'next/head';

import { Header } from '../components/Header';

import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from '../theme';

import '../styles/globals.scss';
import 'macro-css';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>RJournal</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"></link>
      </Head>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <Header />
          <Component {...pageProps} />
        </Provider>
      </MuiThemeProvider>
    </>
  );
}

export default MyApp;

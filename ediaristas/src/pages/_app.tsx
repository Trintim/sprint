import '@styles/globals.css'
import { ThemeProvider } from '@mui/material'
import theme from 'ui/themes/themes';
import Head from 'next/head';
import Header from 'ui/components/surfaces/Header/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>e-Diaristas</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/fonts/tw-icons/css/treinaweb-icons.css" />
      </Head>
      <ThemeProvider theme={theme}>
        <Header/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp

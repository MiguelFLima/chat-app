import '../styles/globals.js';
import Head from 'next/head';
import Globalstyle from '../styles/globals.js';




function MyApp({ Component, pageProps }) {


  return (
    <>
    <Globalstyle />
      <Head>
        <title>Chat │ App</title>
      </Head>
      
      <Component {...pageProps} />
    </>
    )
}

export default MyApp

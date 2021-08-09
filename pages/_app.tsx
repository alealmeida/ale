import App from "next/app";
import Head from "next/head";
import { createContext } from "react";
import { getMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo";
export const GlobalContext = createContext({});
import '../styles/global.sass'


// const MyApp = ({ Component, pageProps }) => {
//   const { global } = pageProps;
//   return (
//     <>
//       <Head>
//         {/* <link rel="shortcut icon" href={getMedia(global.favicon)} /> */}
//         <link
//           rel="stylesheet"
//           href="https://fonts.googleapis.com/css?family=Staatliches"
//         />
//         <link
//           rel="stylesheet"
//           href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
//         />
//         <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
//         <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
//         <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />
//       </Head>
//       <GlobalContext.Provider value={global}>
//         <Component {...pageProps} />
//       </GlobalContext.Provider>
//     </>
//   )
// }


function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const global = await fetchAPI('/api/work');
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } };
};
export default MyApp

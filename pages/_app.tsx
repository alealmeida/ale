import App from "next/app";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo";
import '../styles/global.sass'



class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  return { pageProps }
}
    render() {
      const {Component, pageProps} = this.props
      
      return (
        <ApolloProvider client={client}>
          <Component {...pageProps}  />
        </ApolloProvider>
      )
    }
  }
  
export default MyApp
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href={`${this.props.__NEXT_DATA__.assetPrefix}/_next/static/style.css`}
          />
        </Head>
        <body style={{ 'display': 'block !important' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
/* eslint-disable */
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
        <link rel='shortcut icon' href='/favicon.png' type='image/x-icon' />

        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getServerSideProps(ctx) {
    const initialProps = await Document.getServerSideProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='es'>
        <Head>
          <meta
            name='description'
            content='Plataforma para gestios de MCA SYSTEMS SAS.'
          />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <body>
          <Main />
          <div id='modal'></div>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

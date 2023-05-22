import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='scroll-smooth' style={{scrollBehavior:'smooth'}}>
      <Head>
        <meta name="description" content="Next.js TailwindCSS Starter" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Mega&family=Montserrat&family=Nunito&family=Poppins&family=Raleway&display=swap" rel="stylesheet" />
      </Head>
      <body className='scrollbar-hide scroll-smooth'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
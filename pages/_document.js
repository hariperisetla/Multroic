import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="Multroic - Open Source Gaming" />
        <meta
          property="og:description"
          content="Join our community of developers and gamers to explore a variety of games in your browser or download them to play on your device!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://multroic.netlify.app" />
        <meta
          property="og:image"
          itemProp="image"
          content="https://multroic.netlify.app/assets/og-image.png"
        />
        <meta property="og:image:type" content="image/png" />

        {/* <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="627" /> */}

        <meta
          name="keywords"
          content="multroic, multroic gaming, open source gaming, open source, multroic open source gaming"
        />
        <meta name="author" content="Hari Perisetla" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="multroic.netlify.app" />
        <meta property="twitter:url" content="https://multroic.netlify.app" />

        <meta name="twitter:title" content="Multroic - Open Source Gaming" />
        <meta
          name="twitter:description"
          content="Join our community of developers and gamers to explore a variety of games in your browser or download them to play on your device!"
        />
        <meta
          name="twitter:image"
          content="https://multroic.netlify.app/assets/og-image.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

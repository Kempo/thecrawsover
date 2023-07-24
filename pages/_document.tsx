import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";

const TAG_ID = "G-4MLRQX9KKP";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${TAG_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${TAG_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6801568729476079"
            crossOrigin="anonymous"
          ></script>
          <meta
            property="og:title"
            content="The CrawsOver Pro-Am League by Jamal Crawford"
          />
          <meta
            property="og:image"
            content="https://pbs.twimg.com/media/E58199kUYAU_NV5?format=jpg&name=large"
          />
          <meta
            name="description"
            content="The CrawsOver Pro-Am League by Jamal Crawford. Games played at Seattle Pacific University featuring NBA and Overseas talent for Summer 2023. Free admission for everyone!"
          />
          <meta
            property="og:description"
            content="The CrawsOver Pro-Am League by Jamal Crawford. Games played at Seattle Pacific University featuring NBA and Overseas talent for Summer 2023. Free admission for everyone!"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@thecrawsover" />
          <meta
            name="twitter:title"
            content="The CrawsOver Pro-Am League by Jamal Crawford"
          />
          <meta
            name="twitter:description"
            content="Games played at Seattle Pacific University featuring NBA and Overseas talent for Summer 2023. Free admission for everyone!"
          />
          <meta
            name="twitter:image"
            content="https://thecrawsover.vercel.app/twitter-preview.jpeg"
          />
          <meta name="author" content="Aaron Chen" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Footer from "../app/Footer";
import Highlights from "../app/Highlights";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The CrawsOver Pro-Am League by Jamal Crawford</title>
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
          content="The CrawsOver Pro-Am League by Jamal Crawford. Games played at Seattle Pacific University featuring NBA and Overseas talent for Summer 2022. Free admission for everyone!"
        />
        <meta
          property="og:description"
          content="The CrawsOver Pro-Am League by Jamal Crawford. Games played at Seattle Pacific University featuring NBA and Overseas talent for Summer 2022. Free admission for everyone!"
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
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>
      </Head>
      <main className={styles.main}>
        <div className={styles.gallery}>
          <Image
            src="https://pbs.twimg.com/media/F0z74OBaQAACJKR?format=jpg&name=large"
            alt="The CrawsOver Schedule"
            width={780}
            height={976}
          />
          <Image
            src="https://pbs.twimg.com/media/F09z1VdaIAElhzW?format=jpg&name=large"
            alt="The CrawsOver Roster"
            width={780}
            height={976}
          />
        </div>
      </main>
      <Highlights />
      <Footer />
    </div>
  );
}

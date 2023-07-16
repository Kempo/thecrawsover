import Head from 'next/head'
import Image from 'next/image'
import styles from "../styles/Home.module.scss";
import Highlights from "../components/Highlights";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The CrawsOver Pro-Am League by Jamal Crawford</title>
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
    </div>
  );
}

import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";

export default function Page() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>The CrawsOver Pro-Am League by Jamal Crawford - 2021</title>
      </Head>
      <main className={styles.main}>
        <div className="flex flex-col items-center gap-2">
          <Image
            src="https://pbs.twimg.com/media/E66hLXgUcAAw4Qi?format=jpg&name=large"
            alt="The CrawsOver Schedule"
            width={780}
            height={976}
          />
          <Image
            src="https://pbs.twimg.com/media/E5zdK1AUYAA9qNv?format=jpg&name=large"
            alt="The CrawsOver Roster"
            width={780}
            height={976}
          />
        </div>
      </main>
    </div>
  );
}

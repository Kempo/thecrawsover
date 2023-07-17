import Head from 'next/head'
import Image from 'next/image'
import styles from "../styles/Home.module.scss";
import Highlights from "../components/Highlights";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.png" />
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
      <div className="mt-4 text-center text-2xl">
        <Link href="https://shop.thecrawsoverseattle.com/">Online Shop</Link>
      </div>
      <p className="text-center mt-4 text-gray-500">
        Official merchandise coming soon.
      </p>
    </div>
  );
}

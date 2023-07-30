import Head from 'next/head'
import Image from 'next/image'
import styles from "../styles/Home.module.scss";
import Highlights from "../components/Highlights";
import Link from "next/link";
import Archive from "../components/Archive";
import Shop from "../components/Shop";
import Signup from "../components/Signup";
import Current from "../components/Current";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>The CrawsOver Pro-Am League by Jamal Crawford</title>
      </Head>
      <main className={styles.main}>
        <div className="flex flex-col items-center gap-2">
          <Image
            src="https://pbs.twimg.com/media/F0z74OBaQAACJKR?format=jpg&name=large"
            alt="The CrawsOver Main Poster"
            width={780}
            height={976}
          />
          <Image
            src="https://pbs.twimg.com/media/F03ObvXaYAADW_K?format=jpg&name=large"
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
      <Signup />
      <Current />
      <Highlights />
      {/* <Shop /> */}
      <Archive />
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">ABOUT US</h1>
        <Link className="" href="/faq">
          OUR FAQ
        </Link>
      </div>
    </div>
  );
}

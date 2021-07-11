import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The CrawsOver Pro-Am League</title>
        <meta property="og:title" content="The CrawsOver Pro-Am League" />
        <meta property="og:image" content="https://pbs.twimg.com/media/E58199kUYAU_NV5?format=jpg&name=large" />
        <meta name="description" content="The CrawsOver Pro-Am League by Jamal Crawford. Games played at Seattle Pacific University featuring NBA and Overseas talent for Summer 2021. Free admission for everyone!" />
        <meta property="og:description" content="The CrawsOver Pro-Am League by Jamal Crawford. Games played at Seattle Pacific University featuring NBA and Overseas talent for Summer 2021. Free admission for everyone!" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@thecrawsover" />
        <meta name="twitter:title" content="The CrawsOver Pro-Am League" />
        <meta name="twitter:description" content="Games played at Seattle Pacific University featuring NBA and Overseas talent for Summer 2021. Free admission for everyone!" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.gallery}>
          <Image
            src="https://pbs.twimg.com/media/E58199kUYAU_NV5?format=jpg&name=large"
            alt="The CrawsOver Poster"
            width={780}
            height={976}
          />
          <Image
            src="https://pbs.twimg.com/media/E5uQNcEVoAMFg4p?format=jpg&name=medium"
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
        <div className={styles.location}>
          <div className={styles.info}>
            <h1>Location</h1>
            <a href="https://www.google.com/maps/place/Royal+Brougham+Pavilion/@47.6511405,-122.3627883,17z/data=!3m2!4b1!5s0x549015a7d8662cb5:0xe6a3ad0574e9365c!4m5!3m4!1s0x549015a7d112f3d9:0x1149b3c2a3c003e7!8m2!3d47.6511411!4d-122.3605821">Royal Brougham Pavilion at Seattle Pacific University <br /> (3414 3rd Ave W, Seattle, WA 98119)</a>
          </div>
          <div className={styles.maps}>
            <iframe className={styles.embed} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.713167518666!2d-122.36278834892825!3d47.65114047908551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549015a7d112f3d9%3A0x1149b3c2a3c003e7!2sRoyal%20Brougham%20Pavilion!5e0!3m2!1sen!2sus!4v1626027381164!5m2!1sen!2sus" frameBorder={0} loading="lazy"></iframe>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.links}>
          <a href="https://twitter.com/thecrawsover">Twitter</a>
          <a href="https://t.co/me5fBznzko?amp=1">Facebook</a>
          <a href="https://www.instagram.com/thecrawsover/">Instagram</a>
        </div>
        <p>Last updated 07/11/21. Unofficial site by <a href="https://twitter.com/tweetsbychen">@tweetsbychen</a></p>
      </footer>
    </div>
  )
}

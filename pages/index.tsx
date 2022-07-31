import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { TwitterTweetEmbed } from 'react-twitter-embed'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The CrawsOver Pro-Am League</title>
        <meta property="og:title" content="The CrawsOver Pro-Am League" />
        <meta property="og:image" content="https://pbs.twimg.com/media/E58199kUYAU_NV5?format=jpg&name=large" />
        <meta name="description" content="The CrawsOver Pro-Am League by Jamal Crawford. Games played at Seattle Pacific University featuring NBA and Overseas talent for Summer 2022. Free admission for everyone!" />
        <meta property="og:description" content="The CrawsOver Pro-Am League by Jamal Crawford. Games played at Seattle Pacific University featuring NBA and Overseas talent for Summer 2022. Free admission for everyone!" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@thecrawsover" />
        <meta name="twitter:title" content="The CrawsOver Pro-Am League" />
        <meta name="twitter:description" content="Games played at Seattle Pacific University featuring NBA and Overseas talent for Summer 2022. Free admission for everyone!" />
        <meta name="twitter:image" content="https://thecrawsover.vercel.app/twitter-preview.jpeg" />
        <link rel="icon" href="/favicon.png" />
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </Head>
      <main className={styles.main}>
        <div className={styles.gallery}>
          <Image 
            src="https://pbs.twimg.com/media/FWol9PFVUAcHFRs?format=jpg&name=large"
            alt="The CrawsOver Poster"
            width={780}
            height={976}
          />
          {/* <Image
            src="https://pbs.twimg.com/media/E58199kUYAU_NV5?format=jpg&name=large"
            alt="The CrawsOver Poster"
            width={780}
            height={976}
          />
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
          /> */}
        </div>
        <div className={styles.location}>
          <div className={styles.info}>
            <h1>LOCATION</h1>
            <a href="https://www.google.com/maps/place/Royal+Brougham+Pavilion/@47.6511405,-122.3627883,17z/data=!3m2!4b1!5s0x549015a7d8662cb5:0xe6a3ad0574e9365c!4m5!3m4!1s0x549015a7d112f3d9:0x1149b3c2a3c003e7!8m2!3d47.6511411!4d-122.3605821">Royal Brougham Pavilion at Seattle Pacific University <br /> (3414 3rd Ave W, Seattle, WA 98119)</a>
          </div>
          <div className={styles.maps}>
            <iframe className={styles.embed} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.713167518666!2d-122.36278834892825!3d47.65114047908551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549015a7d112f3d9%3A0x1149b3c2a3c003e7!2sRoyal%20Brougham%20Pavilion!5e0!3m2!1sen!2sus!4v1626027381164!5m2!1sen!2sus" frameBorder={0} loading="lazy"></iframe>
          </div>
        </div>
        <div className={styles.updates}>
          <h1>PLAYER APPEARANCES</h1>
          <blockquote className="twitter-tweet"><p lang="en" dir="ltr">🚨🚨BREAKING NEWS 🚨🚨 <a href="https://twitter.com/TheTraeYoung?ref_src=twsrc%5Etfw">@TheTraeYoung</a> <a href="https://twitter.com/DejounteMurray?ref_src=twsrc%5Etfw">@DejounteMurray</a> and John Collins will all be playing tomorrow and ready to put on a show for the city!!!!!! 🥶🥶🥶🥶 doors open at 11:45am at SPU. <a href="https://twitter.com/hashtag/TheCrawsOver?src=hash&amp;ref_src=twsrc%5Etfw">#TheCrawsOver</a> <a href="https://t.co/Nlxa5iUicC">pic.twitter.com/Nlxa5iUicC</a></p>&mdash; TheCrawsOver (@thecrawsover) <a href="https://twitter.com/thecrawsover/status/1553579946588585984?ref_src=twsrc%5Etfw">July 31, 2022</a></blockquote>
          <blockquote className="twitter-tweet"><p lang="en" dir="ltr">The <a href="https://twitter.com/TheNatural_05?ref_src=twsrc%5Etfw">@TheNatural_05</a> coming thru the pro am today to put on a show!!!!!</p>&mdash; 🏁 Jamal Crawford (@JCrossover) <a href="https://twitter.com/JCrossover/status/1553769890716139521?ref_src=twsrc%5Etfw">July 31, 2022</a></blockquote> 
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.links}>
          <a href="https://twitter.com/thecrawsover">Twitter</a>
          <a href="https://t.co/me5fBznzko?amp=1">Facebook</a>
          <a href="https://www.instagram.com/thecrawsover/">Instagram</a>
        </div>
        <p>Site by <a href="https://twitter.com/tweetsbychen">@tweetsbychen</a></p>
      </footer>
    </div>
  )
}

import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import Highlights from "../../components/Highlights";
import Script from "next/script";

export default function Page() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>The CrawsOver Pro-Am League by Jamal Crawford - 2022</title>
      </Head>
      <main className={styles.main}>
        <div className="flex flex-col items-center gap-2">
          <Image
            src="https://pbs.twimg.com/media/FWol9PFVUAcHFRs?format=jpg&name=large"
            alt="The CrawsOver Poster"
            width={780}
            height={976}
          />
          <Image
            src="https://pbs.twimg.com/media/FXAJIR8VQAEDjW2?format=jpg&name=large"
            alt="The CrawsOver Schedule"
            width={780}
            height={976}
          />
          <Image
            src="https://pbs.twimg.com/media/FX4Ff7YUIAEXmTg?format=jpg&name=large"
            alt="The CrawsOver Roster"
            width={780}
            height={976}
          />
        </div>
        <div className={styles.location}>
          <h1 className={styles.admission}>8/27 WEEKEND UPDATES</h1>
          <Script async src="https://platform.twitter.com/widgets.js" />
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              Semifinals and Championship this weekend at{" "}
              <a href="https://twitter.com/hashtag/TheCrawsOver?src=hash&amp;ref_src=twsrc%5Etfw">
                #TheCrawsOver
              </a>{" "}
              <br />
              <br />
              Saturday: 1:30pm The Unit vs Ball is Life
              <br />
              <br />
              3:00pm Washington’s finest vs The Dream Team <br />
              <br />
              Sunday: 1:30pm Top High School Girls Select Game <br />
              <br />
              3:00pm: Championship Game come support the last weekend!!
            </p>
            &mdash; TheCrawsOver (@thecrawsover){" "}
            <a href="https://twitter.com/thecrawsover/status/1563208272198647812?ref_src=twsrc%5Etfw">
              August 26, 2022
            </a>
          </blockquote>
          <h1 className={styles.admission}>
            🚨🚨 8/20/22 SPECIAL GUEST ALERT 🚨🚨
          </h1>
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              LeBron. <br />
              Dejounte. <br />
              Paolo. <br />
              Chet.
              <br />
              IT.
              <br />
              MarJon.
              <a href="https://twitter.com/thecrawsover?ref_src=twsrc%5Etfw">
                @thecrawsover
              </a>{" "}
              is live tomorrow on{" "}
              <a href="https://t.co/Pqxh2EPubW">https://t.co/Pqxh2EPubW</a> and
              the NBA App 🎥
            </p>
            &mdash; NBA (@NBA){" "}
            <a href="https://twitter.com/NBA/status/1560753432750866435?ref_src=twsrc%5Etfw">
              August 19, 2022
            </a>
          </blockquote>
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨 I thought it was gonna be a movie… now it’s
              HISTORY!!!!!!!!!!!!!!!!!!!! This will be a day like we’ve NEVER
              SEEN{" "}
              <a href="https://twitter.com/KingJames?ref_src=twsrc%5Etfw">
                @KingJames
              </a>{" "}
              WILL BE PLAYING{" "}
              <a href="https://twitter.com/thecrawsover?ref_src=twsrc%5Etfw">
                @thecrawsover
              </a>{" "}
              PRO AM!!!!!!!!!!! It’s O-V-E-R ‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️{" "}
              <a href="https://t.co/wEmLW8zooq">pic.twitter.com/wEmLW8zooq</a>
            </p>
            &mdash; 🏁 Jamal Crawford (@JCrossover){" "}
            <a href="https://twitter.com/JCrossover/status/1560749034641375232?ref_src=twsrc%5Etfw">
              August 19, 2022
            </a>
          </blockquote>
          <h2 style={{ marginBottom: 0 }}>
            GAMES WILL BE STREAMED STARTING 5:30PM ET{" "}
            <a href="https://t.co/vZLRTFPigo">HERE</a>.
          </h2>
          <h2 style={{ marginBottom: 0 }}>FREE FOR EVERYONE.</h2>
          <p>No outside food allowed. Food and drinks available in-house.</p>
          <p>
            Check out the <a href="https://twitter.com/thecrawsover">Twitter</a>{" "}
            for live updates.
          </p>
          <div className={styles.info}>
            <h1>LOCATION</h1>
            <p>Street parking available.</p>
            <a href="https://www.google.com/maps/place/Royal+Brougham+Pavilion/@47.6511405,-122.3627883,17z/data=!3m2!4b1!5s0x549015a7d8662cb5:0xe6a3ad0574e9365c!4m5!3m4!1s0x549015a7d112f3d9:0x1149b3c2a3c003e7!8m2!3d47.6511411!4d-122.3605821">
              Royal Brougham Pavilion at Seattle Pacific University <br /> (3414
              3rd Ave W, Seattle, WA 98119)
            </a>
          </div>
          <div className={styles.maps}>
            <iframe
              className={styles.embed}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.713167518666!2d-122.36278834892825!3d47.65114047908551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549015a7d112f3d9%3A0x1149b3c2a3c003e7!2sRoyal%20Brougham%20Pavilion!5e0!3m2!1sen!2sus!4v1626027381164!5m2!1sen!2sus"
              frameBorder={0}
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className={styles.updates}>
          <h1>😤 PAST SPECIAL APPEARANCES 😤</h1>
          <h2>Summer 2022</h2>
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              We are making HISTORY this weekend at{" "}
              <a href="https://twitter.com/hashtag/TheCrawsOver?src=hash&amp;ref_src=twsrc%5Etfw">
                #TheCrawsOver
              </a>{" "}
              !!!!! This will be a day like we’ve NEVER seen{" "}
              <a href="https://twitter.com/KingJames?ref_src=twsrc%5Etfw">
                @KingJames
              </a>{" "}
              WILL BE Playing Tomorrow!!!!! It’s O-V-E-R ‼️‼️ get there early.
              🎥🎥🎥🎥👀👀{" "}
              <a href="https://t.co/OlyArkPLqM">pic.twitter.com/OlyArkPLqM</a>
            </p>
            &mdash; TheCrawsOver (@thecrawsover){" "}
            <a href="https://twitter.com/thecrawsover/status/1560767965825343488?ref_src=twsrc%5Etfw">
              August 19, 2022
            </a>
          </blockquote>
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              First round pick of the 2022 NBA draft, Chicago bulls{" "}
              <a href="https://twitter.com/DalenTerry?ref_src=twsrc%5Etfw">
                @DalenTerry
              </a>{" "}
              will be{" "}
              <a href="https://twitter.com/thecrawsover?ref_src=twsrc%5Etfw">
                @thecrawsover
              </a>{" "}
              this weekend to put on a show!
            </p>
            &mdash; 🏁 Jamal Crawford (@JCrossover){" "}
            <a href="https://twitter.com/JCrossover/status/1557915199725637632?ref_src=twsrc%5Etfw">
              August 12, 2022
            </a>
          </blockquote>
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              🚨🚨BREAKING NEWS 🚨🚨{" "}
              <a href="https://twitter.com/TheTraeYoung?ref_src=twsrc%5Etfw">
                @TheTraeYoung
              </a>{" "}
              <a href="https://twitter.com/DejounteMurray?ref_src=twsrc%5Etfw">
                @DejounteMurray
              </a>{" "}
              and John Collins will all be playing tomorrow and ready to put on
              a show for the city!!!!!! 🥶🥶🥶🥶 doors open at 11:45am at SPU.{" "}
              <a href="https://twitter.com/hashtag/TheCrawsOver?src=hash&amp;ref_src=twsrc%5Etfw">
                #TheCrawsOver
              </a>{" "}
              <a href="https://t.co/Nlxa5iUicC">pic.twitter.com/Nlxa5iUicC</a>
            </p>
            &mdash; TheCrawsOver (@thecrawsover){" "}
            <a href="https://twitter.com/thecrawsover/status/1553579946588585984?ref_src=twsrc%5Etfw">
              July 31, 2022
            </a>
          </blockquote>
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              The{" "}
              <a href="https://twitter.com/TheNatural_05?ref_src=twsrc%5Etfw">
                @TheNatural_05
              </a>{" "}
              coming thru the pro am today to put on a show!!!!!
            </p>
            &mdash; 🏁 Jamal Crawford (@JCrossover){" "}
            <a href="https://twitter.com/JCrossover/status/1553769890716139521?ref_src=twsrc%5Etfw">
              July 31, 2022
            </a>
          </blockquote>
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              History.{" "}
              <a href="https://twitter.com/JCrossover?ref_src=twsrc%5Etfw">
                @JCrossover
              </a>{" "}
              <a href="https://twitter.com/thecrawsover?ref_src=twsrc%5Etfw">
                @thecrawsover
              </a>
              <br />
              <br />
              50 balls for{" "}
              <a href="https://twitter.com/Pp_doesit?ref_src=twsrc%5Etfw">
                @Pp_doesit
              </a>{" "}
              and{" "}
              <a href="https://twitter.com/Jmcdaniels7?ref_src=twsrc%5Etfw">
                @Jmcdaniels7
              </a>{" "}
              and 34/14/8 for{" "}
              <a href="https://twitter.com/ChetHolmgren?ref_src=twsrc%5Etfw">
                @ChetHolmgren
              </a>{" "}
              💨{" "}
              <a href="https://t.co/4wOur9iZ8n">pic.twitter.com/4wOur9iZ8n</a>
            </p>
            &mdash; SHOWTIME Basketball (@shobasketball){" "}
            <a href="https://twitter.com/shobasketball/status/1553530380916908033?ref_src=twsrc%5Etfw">
              July 30, 2022
            </a>
          </blockquote>
        </div>
        <Highlights />
      </main>
    </div>
  );
}

import Head from "next/head";

export default function FAQ() {
  return (
    <div className="min-h-screen">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>
          Frequently Asked Questions - The CrawsOver Pro-Am League by Jamal
          Crawford
        </title>
      </Head>
      <h1 className="text-xl font-bold text-center underline underline-offset-4 mb-6">
        Frequently Asked Questions
      </h1>
      <div className="mx-8 mb-8">
        <ul className="flex flex-col gap-6">
          <li>
            <h2 className="text-xl font-bold">Is The CrawsOver free?</h2>
            <p>
              Yes! The CrawsOver Pro-Am League is free for everyone every
              summer. First come, first serve. Seating is limited.
            </p>
          </li>
          <li>
            <h2 className="text-xl font-bold">
              When does The CrawsOver start?
            </h2>
            <p>
              The CrawsOver Pro-Am League starts every summer in July and ends
              in August.
            </p>
          </li>
          <li>
            <h2 className="text-xl font-bold">Who plays at The CrawsOver?</h2>
            <p>
              We host a variety of players from around the world, from NBA to
              overseas, college and high school talent. <br /> Notable guests
              the past summers include:
              <ul className="ml-4 mt-4 font-bold">
                <li>Kyrie Irving</li>
                <li>Lebron James</li>
                <li>Jayson Tatum</li>
                <li>Isaiah Thomas</li>
                <li>Nate Robinson</li>
                <li>Dejounte Murray</li>
                <li>Paolo Banchero</li>
                <li>Chet Holmgren</li>
                <li>And many more...</li>
              </ul>
            </p>
          </li>
          <li>
            <h2 className="text-xl font-bold">
              Where is The CrawsOver located?
            </h2>
            <p className="mb-4">
              Royal Brougham Pavilion @ Seattle Pacific University (3414 3rd Ave
              W, Seattle, WA 98119)
            </p>
            <div>
              <iframe
                className="w-full max-w-2xl h-60"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.713167518666!2d-122.36278834892825!3d47.65114047908551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549015a7d112f3d9%3A0x1149b3c2a3c003e7!2sRoyal%20Brougham%20Pavilion!5e0!3m2!1sen!2sus!4v1626027381164!5m2!1sen!2sus"
                frameBorder={0}
                loading="lazy"
              ></iframe>
            </div>
          </li>
          <li>
            <h2 className="text-xl font-bold">Is there parking?</h2>
            <p>
              Yes! There is street parking on West Nickerson Street, a parking
              garage at Seattle Pacific University, and parking lots such as the
              one behind Otto Miller Hall. Some of these may require payment.
            </p>
          </li>
          <li>
            <h2 className="text-xl font-bold">Is there food?</h2>
            <p>
              There will be light snacks such as popcorn and drinks. We
              encourage you not to bring your own food inside.
            </p>
          </li>
          <li>
            <h2 className="text-xl font-bold">Can I play at The CrawsOver?</h2>
            <p>
              If you got game, you can play. The CrawsOver hosts open tryouts
              with a limited capacity before the start of the league. Be on the
              lookout on our socials to get the date, time & location.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

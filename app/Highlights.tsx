import styles from "../styles/Home.module.scss";

export default function Highlights() {
  return (
    <div className={styles.highlights}>
      <h1>🔥🔥 PAST HIGHLIGHTS 🔥🔥</h1>
      <div className={styles.videos}>
        <iframe
          width="95%"
          height="315"
          src="https://www.youtube.com/embed/Mr0Hmd8WCvc"
          title="Lebron James and Jayson Tatum highlights"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          width="95%"
          height="315"
          src="https://www.youtube.com/embed/g1BUvUxKw4c"
          title="Paolo Banchero and Chet Holmgren highlights"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="95%"
          height="315"
          src="https://www.youtube.com/embed/Ug-Vy5vt77Q"
          title="Malachi Flynn highlights"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="95%"
          height="315"
          src="https://www.youtube.com/embed/q7QfBOTYKLA"
          title="Isaiah Thomas highlights"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="95%"
          height="315"
          src="https://www.youtube.com/embed/0TNwtG8-Rhc"
          title="Kevin Porter Jr. and Dejounte Murray highlights"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

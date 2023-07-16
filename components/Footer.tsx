import styles from "../styles/Home.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.callout}>
        <i>The best summer basketball league in the United States.</i>
      </p>
      <div className={styles.links}>
        <a href="https://twitter.com/thecrawsover">Twitter</a>
        <a href="https://t.co/me5fBznzko?amp=1">Facebook</a>
        <a href="https://www.instagram.com/thecrawsover/">Instagram</a>
      </div>
    </footer>
  );
}

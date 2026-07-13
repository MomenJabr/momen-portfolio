import styles from "./Footer.module.css";

const NOVIRA_EMAIL = "karim.s.a.jaber@gmail.com";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.panel}>
        <p className={styles.text}>
          <a
            href={`mailto:${NOVIRA_EMAIL}`}
            className={styles.creditLink}
            title={NOVIRA_EMAIL}
            aria-label={`Email Palestia Labs at ${NOVIRA_EMAIL}`}
          >
            <span className={styles.creditLabel}>© Palestia Labs</span>
            <span className={styles.creditEmail}>{NOVIRA_EMAIL}</span>
          </a>
          {" "}— Designed &amp; Built with React
        </p>
      </div>
    </footer>
  );
}

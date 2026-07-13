import styles from "./EducationCard.module.css";

function hasCertificatePdf(value) {
  if (value == null) {
    return false;
  }

  const trimmed = String(value).trim();
  return trimmed.length > 0 && trimmed !== "#";
}

export default function EducationCard({ item }) {
  const certificateHref = hasCertificatePdf(item.certificatePdf)
    ? String(item.certificatePdf).trim()
    : null;

  return (
    <article className={styles.card} aria-labelledby={`education-${item.id}`}>
      <div className={styles.cardAccent} aria-hidden="true" />

      {item.category ? (
        <p className={styles.category}>{item.category}</p>
      ) : null}

      <header className={styles.cardHeader}>
        <h3 id={`education-${item.id}`} className={styles.institution}>
          {item.institution}
        </h3>
        <p className={styles.program}>{item.program}</p>
        <p className={styles.date}>{item.date}</p>
      </header>

      <p className={styles.description}>{item.description}</p>

      {certificateHref ? (
        <a
          href={certificateHref}
          className={styles.certificateAction}
          target="_blank"
          rel="noreferrer"
        >
          See Certificate
        </a>
      ) : null}
    </article>
  );
}

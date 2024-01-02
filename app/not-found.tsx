import styles from "./page.module.css";

export default function NotFound() {
  return (
    <div className={styles.notfound}>
      <h1 className={styles.title404}>404</h1>
      <p className={styles.p404}>Page not found</p>
    </div>
  );
}

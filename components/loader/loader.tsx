// Importation des modules
import styles from "./page.module.css";

// Composant Loader
export default function Loader() {
  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>{" "}
    </div>
  );
}

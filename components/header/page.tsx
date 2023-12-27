import Link from "next/link";
import styles from "./page.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={"/"} className={styles.title}>
        Pokémon
      </Link>
    </header>
  );
}

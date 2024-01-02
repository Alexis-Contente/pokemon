import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/images/pokemon.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={"/"} className={styles.link}>
        <Image src={Logo} alt="logo" className={styles.img} />
      </Link>
    </header>
  );
}

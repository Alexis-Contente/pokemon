import Footer from "@/components/footer/page";
import styles from "./page.module.css";
import Header from "@/components/header/page";
import Link from "next/link";
import Image from "next/image";
import BorderLeft from "../public/assets/images/border-left.jpg";
import BorderRight from "../public/assets/images/border-right.jpg";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Image
          src={BorderLeft}
          alt="Border Left"
          className={styles.borderLeft}
        />
        <div className={styles.container}>
          <h1 className={styles.title}>Bienvenue !</h1>
          <p className={styles.intro}>
            Retrouvez tous les Pokémons de l&apos;emblématique dessin animé,
            ainsi que toutes les infos liées à ces Pokémons !
          </p>
          <Link href="/pokedex" className={styles.link}>
            &gt; Tous les Pokémons &lt;
          </Link>
        </div>
        <Image
          src={BorderRight}
          alt="Border Right"
          className={styles.borderRight}
        />
      </main>
      <Footer />
    </>
  );
}

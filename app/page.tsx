import Footer from "@/components/footer/page";
import styles from "./page.module.css";
import Header from "@/components/header/page";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Bienvenue</h1>
        <p>
          Retrouvez tous les Pokémons de l&apos;emblématique dessin animé, ainsi
          que toutes les infos liées à ces Pokémons !
        </p>
        <Link href="/pokemons">Tous les Pokémons</Link>
      </main>
      <Footer />
    </>
  );
}

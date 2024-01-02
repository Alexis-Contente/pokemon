"use client";

// Importation des modules
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import Loader from "@/components/loader/loader";
import styles from "./page.module.css";
import { Pokemon } from "@/types/pokemon";

// Composant Pokedex
export default function Pokedex() {
  // Déclaration des variables d'état
  const [cards, setCards] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedGeneration, setSelectedGeneration] = useState<number | null>(
    null
  );

  // Requête pour récupérer les données de tous les Pokémons
  const fetchCards = async () => {
    try {
      const response = await fetch("https://tyradex.vercel.app/api/v1/pokemon");
      const data = await response.json();
      setCards(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  // Fonction pour filtrer les Pokémons par génération
  const filterByGeneration = (generation: number | null) => {
    setSelectedGeneration(generation);
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.buttons}>
          <button
            onClick={() => filterByGeneration(null)}
            className={styles.btn}
          >
            All
          </button>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((gen) => (
            <button
              key={gen}
              onClick={() => filterByGeneration(gen)}
              className={styles.btn}
            >
              Gen {gen}
            </button>
          ))}
        </div>
        <div className={styles.catalogue}>
          {loading ? (
            <Loader />
          ) : (
            cards
              .filter(
                (card) =>
                  selectedGeneration === null ||
                  card.generation === selectedGeneration
              )
              .map((card) => (
                <Link
                  key={card.pokedexId}
                  href={`/pokemon/${card.pokedexId}`}
                  className={styles.card}
                >
                  <div className={styles.header_card}>
                    <h2 className={styles.name}>{card.name.fr}</h2>
                    <p className={styles.generation}>G{card.generation}</p>
                  </div>
                  <Image
                    src={card.sprites.regular}
                    alt={card.name.fr}
                    width={200}
                    height={200}
                    loading="lazy"
                  />
                </Link>
              ))
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

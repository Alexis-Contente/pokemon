"use client";

import Header from "@/components/header/page";
import styles from "./page.module.css";
import Footer from "@/components/footer/page";
import { useEffect, useState } from "react";
import { Pokemon } from "@/types/pokemon";
import Image from "next/image";
import Link from "next/link";
import Loader from "@/components/loader/loader";

export default function Pokedex() {
  const [cards, setCards] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCards = async () => {
    try {
      const response = await fetch("https://tyradex.vercel.app/api/v1/pokemon");
      const data = await response.json();
      console.log("Cards:", data);
      setCards(data);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);
  return (
    <>
      <Header />
      <main className={styles.main}>
        {loading ? (
          <Loader />
        ) : (
          cards.slice(1).map((card) => (
            <Link
              key={card.pokedexId}
              className={styles.card}
              href={`/pokemon/${card.pokedexId}`}
            >
              <div className={styles.header_card}>
                <h2 className={styles.name}>{card.name.fr}</h2>
                <p className={styles.generation}>G{card.generation}</p>
              </div>
              <Image
                className={styles.image}
                src={card.sprites.regular}
                alt={card.name.fr}
                width={200}
                height={200}
                loading="lazy"
              />
            </Link>
          ))
        )}
      </main>
      <Footer />
    </>
  );
}

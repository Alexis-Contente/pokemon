"use client";

import Header from "@/components/header/page";
import styles from "./page.module.css";
import Footer from "@/components/footer/page";
import { useEffect, useState } from "react";
import { Pokemons } from "@/types/pokemons";

export default function Pokemons() {
  const [cards, setCards] = useState<Pokemons[]>([]);
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
        <h1>Pokémons</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          cards.map((card) => (
            <div key={card.pokedexId}>
              <h2>{card.name.fr}</h2>
            </div>
          ))
        )}
      </main>
      <Footer />
    </>
  );
}

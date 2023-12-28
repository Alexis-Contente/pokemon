"use client";

import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import { Pokemon } from "@/types/pokemon";
import { use, useEffect, useState } from "react";

export default function Pokemon({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [loading, setLoading] = useState(true);

  // Fetch the pokemon with the id params.id
  const fetchPokemon = async () => {
    try {
      const response = await fetch(
        `https://tyradex.vercel.app/api/v1/pokemon/${params.id}`
      );
      const data = await response.json();
      console.log("Cards:", data);
      setPokemon(data);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <>
      <Header />
      <h1>{pokemon?.name.fr}</h1>
      <Footer />
    </>
  );
}

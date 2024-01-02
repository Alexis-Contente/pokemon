"use client";

// Importation des modules
import styles from "./page.module.css";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import Loader from "@/components/loader/loader";
import { Pokemon } from "@/types/pokemon";
import Image from "next/image";
import { useEffect, useState } from "react";

// Composant Pokemon
export default function Pokemon({
  params,
}: {
  params: {
    id: string;
  };
}) {
  // Déclaration des variables d'état
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [loading, setLoading] = useState(true);

  // Requête pour récupérer les données d'un Pokémon en fonction de son id
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

  // Utilisation de useEffect pour exécuter la requête au chargement de la page
  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.name}>{pokemon?.name.fr}</h1>
          </div>

          <div className={styles.boxes}>
            <div className={styles.box_image}>
              <Image
                className={styles.image}
                src={pokemon?.sprites.regular ?? "/"}
                alt={pokemon?.name.fr ?? "Image par défaut"}
                width={100}
                height={200}
              />
            </div>

            <div className={styles.box_infos}>
              <p>Génération: {pokemon?.generation}</p>
              <p>Catégorie: {pokemon?.category}</p>
              <p>Types: {pokemon?.types.map((type) => type.name).join(", ")}</p>
              <p>Taille: {pokemon?.height}</p>
              <p>Poid: {pokemon?.weight}</p>
              <p>
                Sexe: Mâle {pokemon?.sexe?.male ?? "NC"} | Femelle{" "}
                {pokemon?.sexe?.female ?? "NC"}
              </p>
              <p>
                Compatibilité:{" "}
                {pokemon?.egg_groups && pokemon.egg_groups.length > 0
                  ? pokemon.egg_groups.map((egg_group, index) => (
                      <li key={index}>{egg_group}</li>
                    ))
                  : "NC"}
              </p>
              <p>
                Talents:{" "}
                {pokemon?.talents.map((talent) => talent.name).join(", ")}
              </p>
            </div>

            <div className={styles.box_stats}>
              <p className={styles.p_stats}>Stats</p>
              <p>{pokemon?.stats.atk} Attaque</p>
              <p>{pokemon?.stats.def} Défense</p>
              <p>{pokemon?.stats.hp} PV</p>
              <p>{pokemon?.stats.spe_atk} Attaque Spéciale</p>
              <p>{pokemon?.stats.spe_def} Défense Spéciale</p>
              <p>{pokemon?.stats.vit} Vitesse</p>
            </div>

            <div className={styles.box_resistances}>
              <p className={styles.p_resistances}>Résistances</p>
              {pokemon?.resistances.map((resistance, index) => (
                <li key={index}>
                  {`${resistance.name}: ${resistance.multiplier}`}
                </li>
              ))}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

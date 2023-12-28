export type Pokemon = {
  pokedexId: string;
  name: {
    fr: string;
  };
  generation: number;
  category: string;
  height: string;
  weight: string;
  sprites: {
    gmax: string;
    regular: string;
    shiny: string;
  };
};

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
  types: {
    name: string;
    image: string;
  };
  talents: {
    name: string;
    tc: boolean;
  };
  stats: {
    hp: number;
    atk: number;
    def: number;
    spe_atk: number;
    spe_def: number;
    vit: number;
  };
  resistances: {
    name: string;
    multiplier: number;
  };
  egg_groups: string[];
  sexe: {
    male: number;
    female: number;
  };
};

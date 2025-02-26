export interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

export interface PokemonListResponse {
  results: { name: string; url: string }[];
}

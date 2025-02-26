import { useEffect, useState } from "react";
import { useAxios } from "@/hooks/useAxios";
import { Pokemon, PokemonListResponse } from "@/interfaces/pokemons";

export const usePokemons = () => {
  const { data, error, loading } = useAxios<PokemonListResponse>(
    "https://pokeapi.co/api/v2/pokemon?limit=20&offset=1"
  );
  const [pokemonDetails, setPokemonDetails] = useState<Pokemon[]>([]);

  useEffect(() => {
    if (data && data.results) {
      const fetchPokemonDetails = async () => {
        const details = await Promise.all(
          data.results.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            return response.json();
          })
        );
        setPokemonDetails(details);
      };

      fetchPokemonDetails();
    }
  }, [data]);

  return { pokemonDetails, loading, error, data };
};

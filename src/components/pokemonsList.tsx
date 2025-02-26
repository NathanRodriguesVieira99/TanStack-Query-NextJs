"use client";

import Image from "next/image";
import { usePokemons } from "@/hooks/usePokemons";

export const PokemonsList = () => {
  const { data, pokemonDetails, loading, error } = usePokemons();

  if (loading) return <p>carregando pokemon</p>;

  if (error) return <p>Erro: {error}</p>;

  if (!data) return <p>Nenhum pokemon encontrado</p>;

  return (
    <div className="">
      <h1 className="text-center">Lista de Pokémons</h1>
      <ul className=" flex items-center justify-center flex-col mt-8">
        {pokemonDetails.map((pokemon) => (
          <li key={pokemon.name} style={{ marginBottom: "20px" }}>
            <h2>{pokemon.name}</h2>
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width={200}
              height={200}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

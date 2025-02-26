"use client";
import { useAxios } from "@/hooks/useAxios";
import Image from "next/image";

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

export const Pokemons = () => {
  const { data, error, loading } = useAxios<Pokemon>(
    "https://pokeapi.co/api/v2/pokemon/charizard"
  );

  if (loading) return <p>carregando pokemon</p>;

  if (error) return <p>Erro: {error}</p>;

  if (!data) return <p>Nenhum pokemon encontrado</p>;

  return (
    <div>
      <h1>Pokémon: {data.name}</h1>
      <Image
        src={data.sprites.front_default}
        alt={data.name}
        width={200}
        height={200}
      />
    </div>
  );
};

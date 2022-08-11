import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

function usePokemonList() {
  return useQuery("pokemon", async () => {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=50"
    );
    return data.results;
  });
}

function Main({ setPokemon }) {
  const { isLoading, data } = usePokemonList();
  return (
    <div>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <ul>
          {data.map((pokemon) => (
            <li>
              <a onClick={() => setPokemon(pokemon.name)} href="#">
                {pokemon.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Main;

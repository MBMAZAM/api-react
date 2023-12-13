import axios from "axios";
import { useState, useEffect } from "react";

const FetchApiXi = () => {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => setPokemon(response.data.results));
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div>
      <ul>
        {pokemon.map((pokemon) => (
          <li key={pokemon.url}> {pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchApiXi;

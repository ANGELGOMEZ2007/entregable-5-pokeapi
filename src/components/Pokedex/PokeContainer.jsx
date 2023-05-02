import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import PokeCard from "./PokeCard";

const PokeContainer = () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
  const [pokemons, getAllPokemons] = useFetch(url);

  useEffect(() => {
    getAllPokemons()
  }, [])

  

  return <div className="poke-container">
    {
        pokemons?.results.map(poke => (
            <PokeCard key={poke.url} url={poke.url}/>
        ))
    }
    </div>;
};

export default PokeContainer;

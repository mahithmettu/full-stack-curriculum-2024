import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid2 } from "@mui/material";

function PokemonList() {

<<<<<<< HEAD
  const [pokemons, setPokemons] = useState([])

  function fetchPokemon() {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => {
      setPokemons(response.data.results)
    })
  }

  useEffect(() => {
    fetchPokemon()
  },[])

  
  return (
    <Grid2 container justifyContent="center">
      {pokemons.map((pokemon,index) => (
      <PokemonCard key={pokemon.name} pokemon={pokemon} index ={index + 1}/>
      ))}
    </Grid2>
=======
  return (
    <div>
        Hello World! This is supposed to show the entire list of Pokemons.
    </div>
>>>>>>> upstream/main
  );
}

export default PokemonList;
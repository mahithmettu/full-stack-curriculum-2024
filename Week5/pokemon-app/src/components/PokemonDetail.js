import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Typography } from "@mui/material";

function PokemonDetail() {

<<<<<<< HEAD
  const{name} = useParams()
  const [pokemon, setPokemon] = useState(null)

  function fetchPokemonDetail() {
    axios.get('https://pokeapi.co/api/v2/pokemon/${name}')
    .then((response) => {
      setPokemon(response.data)
    })
  }

useEffect(() => {
  fetchPokemonDetail()
}, [])

=======
>>>>>>> upstream/main

  const imageUrl = 'https://placehold.co/400'

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
<<<<<<< HEAD
      <img src = >
=======
      Pokemon Detail
>>>>>>> upstream/main
    </div>
  );
}

export default PokemonDetail;

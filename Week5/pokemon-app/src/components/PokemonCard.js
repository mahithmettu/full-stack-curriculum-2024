import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import { Link } from "react-router-dom";

function PokemonCard(props) {
  const pokemonName = 'something';
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index}.png`;

  return (
    <Card sx={{ margin: 1 }}>
<<<<<<< HEAD
      <CardActionArea component={Link} to ={`${pokemonName}`}>
        <CardMedia component="img" height="120" image={imageUrl}>
          <CardContent>
            <Typography>
              {pokemonName.char(0).toUpperCase + pokemonName.slice(1)}
            </Typography>
          </CardContent>
        </CardMedia>
      </CardActionArea>
=======
>>>>>>> upstream/main

    </Card>
  );
}

export default PokemonCard;

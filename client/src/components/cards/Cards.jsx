import React from "react";
import Card from "../card/Card";
import style from "./cards.module.css";

function Cards({ pokemons }) {
  return (
    <div className={style.cards}>
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          height={pokemon.height}
          weight={pokemon.weight}
          image={pokemon.image}
          hp={pokemon.hp}
          attack={pokemon.attack}
          defense={pokemon.defense}
          speed={pokemon.speed}
          types={pokemon.Types}
        />
      ))}
    </div>
  );
}

export default Cards;

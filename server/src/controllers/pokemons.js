const axios = require("axios");
const { Pokemons, Type } = require("../db");

const getPokemonDetails = async (url) => {
  try {
    const response = await axios.get(url);
    const { name, id, sprites, types, stats } = response.data;

    const image = sprites.other.dream_world.front_default;
    const Types = types.map(({ type }) => type.name);

    const attackStat = stats.find((stat) => stat.stat.name === "attack");
    const attack = attackStat.base_stat;
    return { name, id, image, url, Types, attack };
  } catch (error) {
    throw error;
  }
};

const getAllPokemons = async () => {
  try {
    let allPokemons = [];
    let nextUrl = "https://pokeapi.co/api/v2/pokemon";
    let pokemonCount = 0;
    const apiPokemonLimit = 200; // Límite solo para Pokémon de la API

    while (nextUrl && pokemonCount < apiPokemonLimit) {
      const { data } = await axios.get(nextUrl);
      const pokemonDetailsPromises = data.results.map(async ({ url }) => {
        const details = await getPokemonDetails(url);
        return details;
      });

      const pokemonDetails = await Promise.all(pokemonDetailsPromises);
      allPokemons.push(...pokemonDetails);
      nextUrl = data.next;
      pokemonCount += data.results.length;
    }

    const pokemonFromDB = await Pokemons.findAll({ include: { model: Type } });

    if (pokemonFromDB) {
      for (let i = 0; i < pokemonFromDB.length; i++) {
        allPokemons.push(pokemonFromDB[i]);
      }
    }

    return allPokemons;
  } catch (error) {
    throw error;
  }
};

const pokemons = async (req, res) => {
  try {
    const allPokemons = await getAllPokemons();

    res.json(allPokemons);
  } catch (error) {
    console.error(error.response);
    res.status(404).json({
      message: "Hubo un problema con la obtención de los Pokémon",
    });
  }
};

module.exports = pokemons;

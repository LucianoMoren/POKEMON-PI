const axios = require("axios");
const { Pokemons } = require("../db");

const getPokemonDetails = async (url) => {
  try {
    const response = await axios.get(url);
    const { name, id, sprites } = response.data;

    const image = sprites.front_default;

    return { name, id, image, url };
  } catch (error) {
    throw error;
  }
};

const getAllPokemons = async () => {
  try {
    let allPokemons = [];
    let nextUrl = "https://pokeapi.co/api/v2/pokemon";

    while (nextUrl) {
      const { data } = await axios.get(nextUrl);
      const pokemonDetailsPromises = data.results.map(async ({ url }) => {
        const details = await getPokemonDetails(url);
        return details;
      });

      const pokemonDetails = await Promise.all(pokemonDetailsPromises);
      allPokemons.push(...pokemonDetails);
      nextUrl = data.next;
    }

    const pokemonFromDB = await Pokemons.findAll();

    if (pokemonFromDB) {
      allPokemons.push(pokemonFromDB);
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

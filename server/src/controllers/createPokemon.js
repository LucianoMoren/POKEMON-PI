const axios = require("axios");
const { Pokemons, Type } = require("../db");

const postPokemon = async (req) => {
  const { name, height, weight, image, hp, attack, defense, speed, types } =
    req.body;

  if (!name) {
    throw new Error("Name is required to query the database.");
  }

  const existingPokemon = await Pokemons.findOne({ where: { name: name } });

  if (existingPokemon) {
    throw new Error("Pokemon with this name already exists");
  }

  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
    );
    if (response.data) {
      throw new Error("Pokemon with this name already exists");
    }
  } catch (error) {
    if (error.response && error.response.status !== 404) {
      throw error;
    }
  }

  let typesInstances = [];

  for (let typeName of types) {
    let typeInstance = await Type.findOrCreate({ where: { name: typeName } });
    typesInstances.push(typeInstance[0]);
  }

  let newPokemon = await Pokemons.create({
    name,
    height,
    weight,
    image,
    hp,
    attack,
    defense,
    speed,
  });

  await newPokemon.setTypes(typesInstances);

  return newPokemon;
};

module.exports = postPokemon;

const axios = require("axios");
const { sequelize, Pokemons } = require("../db");
const { Op } = require("sequelize");

const getCharByName = async (req, res) => {
  const { name } = req.query;

  try {
    //! Buscar pokemon en DB
    const pokemonDB = await Pokemons.findAll({
      where: {
        Nombre: { [Op.iLike]: name },
      },
    });

    if (pokemonDB.length > 0) {
      return res.status(200).json(pokemonDB);
    }

    //! Buscar pokemon en API
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const response = await axios.get(apiUrl);

    const PokemonApi = response.data;
    res.status(200).json([PokemonApi]);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      message: "Hubo un problema al obtener la información del Pokémon",
    });
  }
};

module.exports = getCharByName;

const axios = require("axios");
const { sequelize, Pokemons } = require("../db");
const { Op } = require("sequelize");

const getCharacterById = async (req, res) => {
  try {
    const { idPokemon } = req.params;

    //! Buscar pokemon en DB
    const pokemonDB = await Pokemons.findAll({
      where: {
        id: { [Op.eq]: parseInt(idPokemon) },
      },
    });

    if (pokemonDB.length > 0) {
      return res.status(200).json(pokemonDB);
    }

    //! Buscar pokemon por API
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`;

    const apiResponse = await axios.get(apiUrl);

    const characterData = apiResponse.data;
    const { name, id, height, weight, sprites, stats } = characterData;

    const image = sprites.other.dream_world.front_default;

    //! Buscar las estadisticas
    const hpStat = stats.find((stat) => stat.stat.name === "hp");
    const attackStat = stats.find((stat) => stat.stat.name === "attack");
    const defenseStat = stats.find((stat) => stat.stat.name === "defense");
    const speedStat = stats.find((stat) => stat.stat.name === "speed");

    //! Verifica si se encuentran, y las retorna
    if (attackStat && defenseStat && speedStat) {
      const hp = hpStat.base_stat;
      const attack = attackStat.base_stat;
      const defense = defenseStat.base_stat;
      const speed = speedStat.base_stat;
      const character = {
        name,
        id,
        height,
        weight,
        image,
        hp,
        attack,
        defense,
        speed,
      };

      res.json(character);
    }
  } catch (error) {
    console.error(error); // Imprime el error completo para depuración
    res.status(500).json({
      message: "Hubo un problema al procesar la solicitud.",
    });
  }
};

module.exports = getCharacterById;

const axios = require("axios");
const { Pokemons, Type } = require("../db");
const { Op } = require("sequelize");

const getCharByName = async (req, res) => {
  const { name } = req.query;

  try {
    const pokemonDB = await Pokemons.findAll({
      where: {
        name: { [Op.iLike]: name },
      },
      include: [Type],
    });

    if (pokemonDB.length > 0) {
      // Transformar los tipos para que solo contengan el nombre
      const transformedPokemonDB = pokemonDB.map((pokemon) => {
        return {
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.image,
          attack: pokemon.attack,
          defense: pokemon.defense,
          speed: pokemon.speed,
          height: pokemon.height,
          weight: pokemon.weight,
          Types: pokemon.Types.map((type) => type.name),
        };
      });

      res.status(200).json(transformedPokemonDB);
    } else {
      // Si no se encuentra en la base de datos, buscar en la API
      const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;
      const apiResponse = await axios.get(apiUrl);
      const characterData = apiResponse.data;
      const { id, height, weight, sprites, stats, types } = characterData;

      const image = sprites.other.dream_world.front_default;
      const Types = types.map((type) => type.type.name);

      const hpStat = stats.find((stat) => stat.stat.name === "hp");
      const attackStat = stats.find((stat) => stat.stat.name === "attack");
      const defenseStat = stats.find((stat) => stat.stat.name === "defense");
      const speedStat = stats.find((stat) => stat.stat.name === "speed");

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
          Types,
        };

        res.status(200).json(character);
      }
    }
  } catch (error) {
    console.error(error);
    if (axios.isAxiosError(error) && error.response.status === 404) {
      console.error(error);
      if (axios.isAxiosError(error) && error.response.status === 404) {
        // Manejar el error 404 específicamente para la API de Pokémon
        res.status(404).json({
          message: "Pokémon no encontrado en la API",
        });
      } else {
        // Otros errores
        res.status(500).json({
          message: "Hubo un problema al obtener la información del Pokémon",
        });
      }
    }
  }
};

module.exports = getCharByName;

const axios = require("axios");
const { Pokemons, Type } = require("../db");

const getCharacterById = async (req, res) => {
  try {
    const { idPokemon } = req.params;

    if (!isNaN(idPokemon)) {
      const apiUrl = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`;

      try {
        const apiResponse = await axios.get(apiUrl);
        const characterData = apiResponse.data;

        const { name, id, height, weight, sprites, stats, types } =
          characterData;

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

          return res.json(character);
        }
      } catch (apiError) {
        console.error(apiError);
      }
    }

    const pokemonDB = await Pokemons.findAll({
      where: {
        id: idPokemon,
      },
      include: [Type],
    });

    if (pokemonDB.length > 0) {
      const dbPokemon = pokemonDB[0]; // Tomar el primer resultado

      const characterFromDB = {
        id: dbPokemon.id,
        name: dbPokemon.Nombre,
        image: dbPokemon.Imagen,
        attack: dbPokemon.Ataque,
        defense: dbPokemon.Defensa,
        speed: dbPokemon.Velocidad,
        height: dbPokemon.Altura,
        weight: dbPokemon.Peso,
        Types: dbPokemon.Types ? dbPokemon.Types.map((type) => type.name) : [],
      };

      return res.status(200).json(characterFromDB);
    }

    res.status(404).json({
      message: "Pokemon no encontrado.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Hubo un problema al procesar la solicitud.",
    });
  }
};

module.exports = getCharacterById;

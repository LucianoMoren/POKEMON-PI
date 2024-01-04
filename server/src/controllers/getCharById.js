const axios = require("axios");

const getCharacterById = async (req, res) => {
  try {
    const { idPokemon } = req.params;
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`;

    const apiResponse = await axios.get(apiUrl);

    const characterData = apiResponse.data;
    const { name, id, height, weight, sprites, stats, types } = characterData;

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
    console.error(error.response);
    res.status(404).json({
      message: "Hubo un problema al obtener la información del Pokémon.",
    });
  }
};

module.exports = getCharacterById;

const axios = require("axios");

const getCharacterById = async (req, res) => {
  try {
    const { idPokemon } = req.params;
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`;

    const apiResponse = await axios.get(apiUrl);

    const characterData = apiResponse.data;
    const { name, id } = characterData;

    const character = { name, id };

    res.json(character);
  } catch (error) {
    console.error(error.response);
    res
      .status(404)
      .json({
        message: "Hubo un problema al obtener la información del Pokémon.",
      });
  }
};

module.exports = getCharacterById;

const axios = require("axios");
const { Type } = require("../db");

const getTypesHandler = async (req, res) => {
  const URL = "https://pokeapi.co/api/v2/type";
  let allTypes = [];

  try {
    const { data } = await axios.get(URL);
    const result = data.results;

    for (let i = 0; i < result.length; i++) {
      if (result[i].name) {
        allTypes.push(result[i].name);
      }
    }

    for (let i = 0; i < allTypes.length; i++) {
      await Type.findOrCreate({
        where: {
          name: allTypes[i],
        },
      });
    }

    return res.status(200).json(allTypes);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = getTypesHandler;

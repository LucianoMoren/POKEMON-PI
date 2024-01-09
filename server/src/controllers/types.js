const axios = require("axios");
const { Type } = require("../db.js");

const getTypesHandler = async (req, res) => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/type");
    const apiTypes = response.data.results;

    // Utilizando Promise.all para realizar las operaciones de manera concurrente
    await Promise.all(
      apiTypes.map(async (typeData) => {
        const typeName = typeData.name;

        const existingType = await Type.findOne({ where: { name: typeName } });

        if (!existingType) {
          await Type.create({ name: typeName });
        }
      })
    );

    // Retornando todos los tipos después de la operación
    const allTypes = await Type.findAll();
    res.json(allTypes);
  } catch (error) {
    console.error("Error al obtener y guardar tipos:", error.message);
    res.status(500).json({ error: "Error al obtener y guardar tipos" });
  }
};

module.exports = getTypesHandler;

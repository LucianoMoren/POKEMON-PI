const axios = require("axios");
const { Type } = require("../db");

//!Busca los Types en la API
const getTypesFromAPI = async () => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/type");
    const types = response.data.results.map((type) => type.name);
    return types;
  } catch (error) {
    console.error("Error al obtener tipos desde la API:", error.message);
    throw error;
  }
};
//! Busca los Types en la DB y si no encuentra uno, lo crea
const saveTypesToDatabase = async (types) => {
  try {
    //* Recorre los tipos en la base de datos y si no lo encuentra, lo crea
    for (const typeName of types) {
      await Type.findOrCreate({ where: { name: typeName } });
    }
    console.log("Tipos guardados en la base de datos");
  } catch (error) {
    console.error("Error al guardar tipos en la base de datos:", error.message);
    throw error;
  }
};
//! Retorna los Types
const getTypes = async (req, res) => {
  try {
    //* Busca los types en la DB
    let types = await Type.findAll();

    //* Si no encuentra ninguno, busca en la API y los guarda en la DB
    if (types.length === 0) {
      types = await getTypesFromAPI();
      await saveTypesToDatabase(types);
    }

    //* Retorna los tipos en formato json
    res.json(types);
  } catch (error) {
    console.error("Error al obtener tipos:", error.message);
    res.status(500).json({ error: "Error al obtener tipos" });
  }
};

module.exports = getTypes;

const axios = require("axios");
const { Pokemons, Type } = require("../db");

const createPokemon = async (req, res) => {
  try {
    console.log("Body:", req.body);
    const { name, height, weight, image, hp, attack, defense, speed } =
      req.body;

    const externalApiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;

    try {
      await axios.get(externalApiUrl);
      return res.status(400).json({
        message: `El Pokémon con nombre ${name} ya existe en la API externa.`,
      });
    } catch (error) {
      if (error.response && error.response.status !== 404) {
        throw error;
      }
    }

    const existingLocalPokemon = await Pokemons.findOne({
      where: {
        name: name,
      },
    });

    if (existingLocalPokemon) {
      return res.status(400).json({
        message:
          "Ya existe un Pokémon con ese nombre en la base de datos local",
      });
    }

    // Convertir todos los nombres de tipos a minúsculas
    // const lowercaseTypes = types.map((type) => type.toLowerCase());

    // const existingTypes = await Type.findAll({
    //   where: {
    //     name: lowercaseTypes,
    //   },
    // });

    // if (existingTypes.length !== lowercaseTypes.length) {
    //   const missingTypes = lowercaseTypes.filter(
    //     (type) =>
    //       !existingTypes.find((existingType) => existingType.name === type)
    //   );

    // return res.status(400).json({
    //   message: `Los siguientes tipos no existen: ${missingTypes.join(", ")}`,
    // });
    // }

    const nuevoPokemon = await Pokemons.create({
      name,
      height,
      weight,
      image,
      hp,
      attack,
      defense,
      speed,
    });

    // await nuevoPokemon.setTypes(existingTypes);

    res.status(201).json({
      message: "Pokemon creado exitosamente",
      pokemon: nuevoPokemon,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el Pokémon" });
  }
};

module.exports = createPokemon;

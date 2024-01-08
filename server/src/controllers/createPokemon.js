// const axios = require("axios");
// const { Pokemons, Type } = require("../db"); // Asegúrate de que la ruta sea correcta

// const createPokemon = async (req, res) => {
//   try {
//     const { name, height, weight, image, hp, attack, defense, speed, types } =
//       req.body;

//     const externalApiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;

//     try {
//       await axios.get(externalApiUrl);
//       return res.status(400).json({
//         message: `El Pokémon con nombre ${name} ya existe en la API externa.`,
//       });
//     } catch (error) {
//       if (error.response && error.response.status !== 404) {
//         throw error;
//       }
//     }

//     const existingLocalPokemon = await Pokemons.findOne({
//       where: {
//         Nombre: name,
//       },
//     });

//     if (existingLocalPokemon) {
//       return res.status(400).json({
//         message:
//           "Ya existe un Pokémon con ese nombre en la base de datos local",
//       });
//     }

//     const nuevoPokemon = await Pokemons.create({
//       Nombre: name,
//       Altura: height,
//       Peso: weight,
//       Imagen: image,
//       Vida: hp,
//       Ataque: attack,
//       Defensa: defense,
//       Velocidad: speed,
//     });

//     const tiposAsociados = await Type.findAll({
//       where: {
//         name: types,
//       },
//     });

//     await nuevoPokemon.setTypes(tiposAsociados);

//     res.status(201).json({
//       message: "Pokemon creado exitosamente",
//       pokemon: nuevoPokemon,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error al crear el Pokémon" });
//   }
// };

// module.exports = createPokemon;
const axios = require("axios");
const { Pokemons, Type } = require("../db");

const createPokemon = async (req, res) => {
  try {
    const { name, height, weight, image, hp, attack, defense, speed, types } =
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
        Nombre: name,
      },
    });

    if (existingLocalPokemon) {
      return res.status(400).json({
        message:
          "Ya existe un Pokémon con ese nombre en la base de datos local",
      });
    }

    const nuevoPokemon = await Pokemons.create({
      Nombre: name,
      Altura: height,
      Peso: weight,
      Imagen: image,
      Vida: hp,
      Ataque: attack,
      Defensa: defense,
      Velocidad: speed,
    });

    const tiposAsociados = await Promise.all(
      types.map(async (typeName) => {
        const existingType = await Type.findOne({
          where: {
            name: typeName,
          },
        });

        if (existingType) {
          return existingType;
        } else {
          // Si no existe, crea el nuevo tipo y lo devuelve
          const newType = await Type.create({
            name: typeName,
          });
          return newType;
        }
      })
    );

    await nuevoPokemon.setTypes(tiposAsociados);

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

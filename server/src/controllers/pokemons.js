const axios = require("axios");

const getPokemonDetails = async (url) => {
  try {
    const response = await axios.get(url);
    const { name, id, sprites } = response.data;

    const image = sprites.front_default;

    return { name, id, image, url };
  } catch (error) {
    throw error;
  }
};

const getAllPokemons = async () => {
  try {
    let allPokemons = [];
    let nextUrl = "https://pokeapi.co/api/v2/pokemon";

    while (nextUrl) {
      const { data } = await axios.get(nextUrl);
      const pokemonDetailsPromises = data.results.map(async ({ url }) => {
        const details = await getPokemonDetails(url);
        return details;
      });

      const pokemonDetails = await Promise.all(pokemonDetailsPromises);
      allPokemons.push(...pokemonDetails);
      nextUrl = data.next;
    }

    return allPokemons;
  } catch (error) {
    throw error;
  }
};

const pokemons = async (req, res) => {
  try {
    const allPokemons = await getAllPokemons();

    res.json(allPokemons);
  } catch (error) {
    console.error(error.response);
    res.status(404).json({
      message: "Hubo un problema con la obtención de los Pokémon",
    });
  }
};

module.exports = pokemons;

//! CODIGO PARA TRAER LOS 21
// const axios = require("axios");

// const getAllPokemons = async (req, res) => {
//   try {
//     let allPokemons = [];
//     let nextUrl = "https://pokeapi.co/api/v2/pokemon";

//     while (nextUrl) {
//       const { data } = await axios.get(nextUrl);
//       const pokemons = data.results.map(({ name, url }) => ({ name, url }));
//       allPokemons.push(...pokemons);
//       nextUrl = data.next;
//     }

//     return allPokemons;
//   } catch (error) {
//     throw error;
//   }
// };

// const pokemons = async (req, res) => {
//   try {
//     const allPokemons = await getAllPokemons();

//     res.json(allPokemons);
//   } catch (error) {
//     console.error(error.response);
//     res.status(404).json({
//       message: "Hubo un problema con la obtención de los Pokémon",
//     });
//   }
// };

module.exports = pokemons;

//! Trae 20 pokemons
// const axios = require("axios");
// const apiUrl = "https://pokeapi.co/api/v2/pokemon";

// const pokemons = async (req, res) => {
//   try {
//     //Peticion a la API
//     const response = await axios.get(apiUrl);

//     //Se hace un .map para sacar todos los datos y poderlos retornarlos
//     const pokemons = response.data.results.map(async (pokemon) => {
//       //Se hace una peticion para sacar datos mas detallados
//       const pokemonDetails = await axios.get(pokemon.url);

//       //Se retorna un objeto con cada pokemon
//       return {
//         name: pokemon.name,
//         url: pokemon.url,
//         details: {
//           id: pokemonDetails.data.id,
//           height: pokemonDetails.data.height,
//           weight: pokemonDetails.data.weight,
//         },
//       };
//     });

//     //Esto espera a que todas las promesas se resuelvan para luego ejecutarse :)
//     const resolvedPokemons = await Promise.all(pokemons);

//     res.json(resolvedPokemons);
//   } catch (error) {
//     console.error(error.response);
//     res.status(404).json({
//       message: "Hubo un problema con la obtención de los Pokemones",
//     });
//   }
// };

// module.exports = pokemons;

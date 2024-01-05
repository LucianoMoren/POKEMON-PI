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

//! CODIGO PARA TRAER LOS 21

// Importa la biblioteca axios para hacer peticiones HTTP.
const axios = require("axios");

// Define una función asincrónica llamada getAllPokemons.
const getAllPokemons = async () => {
  try {
    // Inicializa un array vacío para almacenar todos los Pokémon.
    let allPokemons = [];

    // Inicializa la URL base de la API de Pokémon.
    let nextUrl = "https://pokeapi.co/api/v2/pokemon";

    // Realiza un bucle mientras haya una URL siguiente.
    while (nextUrl) {
      // Realiza una solicitud HTTP GET a la URL actual.
      const { data } = await axios.get(nextUrl);

      // Mapea los resultados de la respuesta para obtener nombre y URL de cada Pokémon.
      const pokemons = data.results.map(({ name, url }) => ({ name, url }));

      // Agrega los Pokémon mapeados al array general.
      allPokemons.push(...pokemons);

      // Actualiza la URL siguiente para la próxima iteración del bucle.
      nextUrl = data.next;
    }

    // Devuelve el array completo de todos los Pokémon.
    return allPokemons;
  } catch (error) {
    // Captura cualquier error que pueda ocurrir durante el proceso y lo lanza.
    throw error;
  }
};

// Define una función asincrónica llamada pokemons, que maneja la lógica de la ruta /pokemons.
const pokemons = async (req, res) => {
  try {
    // Llama a la función getAllPokemons para obtener todos los Pokémon.
    const allPokemons = await getAllPokemons();

    // Envia la respuesta como un JSON que contiene todos los Pokémon.
    res.json(allPokemons);
  } catch (error) {
    // Maneja cualquier error que pueda ocurrir durante la obtención de los Pokémon.
    console.error(error.response);

    // Envia una respuesta de error con un mensaje personalizado.
    res.status(404).json({
      message: "Hubo un problema con la obtención de los Pokémon",
    });
  }
};

// Exporta la función pokemons para que pueda ser utilizada en otros archivos.
module.exports = pokemons;

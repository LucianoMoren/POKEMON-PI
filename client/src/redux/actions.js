import axios from "axios";

import {
  GET_ALL_POKEMONS,
  POST_POKEMONS,
  FILTER_TYPE,
  FILTER_BY_ORIGIN,
  ORDER,
  ORDER_ATTACK,
  GET_TYPES,
  SEARCH_POKEMON,
  FILTER_POKEMON_BY_TYPES,
  RESET,
} from "./actions-types";
const URL_API = import.meta.env.VITE_URL_API;
export const getAllPokemons = () => {
  const endpoint = `${URL_API}/pokemons`;
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: GET_ALL_POKEMONS,
        payload: data,
      });
    } catch (error) {
      console.error("Error obteniendo los tipos: ", error);
      if (error.response) {
        console.error("Detalles del error:", error.response.data);
      }
    }
  };
};

export const getTypes = () => {
  return (dispatch) => {
    axios
      .get(`${URL_API}/types`)
      .then(({ data }) => {
        return dispatch({
          type: GET_TYPES,
          payload: data,
        });
      })
      .catch((error) => {
        console.error("Error obteniendo los tipos: ", error);
        if (error.response) {
          console.error("Detalles del error:", error.response.data);
        }
      });
  };
};

export const searchPokemon = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL_API}/pokemons/name?name=${name}`);
      dispatch({ type: SEARCH_POKEMON, payload: data });
    } catch (error) {
      console.error("Error al buscar el Pokémon:", error);
    }
  };
};

export const postPokemons = (pokemon) => {
  const endpoint = `${URL_API}/pokemons`;
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, pokemon);

      console.log(data, "dataaa");
      return dispatch({
        type: POST_POKEMONS,
        payload: data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
};

export const filterType = (type) => {
  return { type: FILTER_TYPE, payload: type };
};

export const filterByOrigin = (id) => {
  console.log(id, "IDDDDDDDDDD");
  return { type: FILTER_BY_ORIGIN, payload: id };
};

export const filterPokemonByType = (type) => {
  return async (dispatch, getState) => {
    try {
      const { allPokemons } = getState();

      const filteredPokemons = allPokemons.filter(
        (pokemon) => pokemon.Types && pokemon.Types.includes(type)
      );

      dispatch({ type: FILTER_POKEMON_BY_TYPES, payload: filteredPokemons });
    } catch (error) {
      console.log(error);
    }
  };
};

export const order = (order) => {
  return { type: ORDER, payload: order };
};

export const orderAttack = (attack) => {
  return { type: ORDER_ATTACK, payload: attack };
};

export const reset = (reset) => {
  return { type: RESET, payload: reset };
};

import axios from "axios";

import {
  GET_ALL_POKEMONS,
  POST_POKEMONS,
  FILTER_TYPE,
  FILTER_BY_ORIGIN,
  ORDER,
  ORDER_ATTACK,
} from "./actions-types";

export const getAllPokemons = () => {
  const endpoint = "http://localhost:3001/pokemons";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: GET_ALL_POKEMONS,
        payload: data,
      });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  };
};

export const postPokemons = (pokemon) => {
  const endpoint = "http://localhost:3001/pokemons";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, pokemon);
      return dispatch({
        type: POST_POKEMONS,
        payload: data,
      });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  };
};

export const filterType = (type) => {
  return { type: FILTER_TYPE, payload: type };
};

export const filterByOrigin = (id) => {
  return { type: FILTER_BY_ORIGIN, payload: id };
};

export const order = (order) => {
  return { type: ORDER, payload: order };
};

export const orderAttack = (attack) => {
  return { type: ORDER_ATTACK, payload: attack };
};

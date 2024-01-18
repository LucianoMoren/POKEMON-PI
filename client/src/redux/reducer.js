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

const initialState = {
  pokemons: [],
  allPokemons: [],
  searchTypes: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: payload,
        allPokemons: payload,
      };
    case GET_TYPES:
      return {
        ...state,
        searchTypes: payload,
      };

    case SEARCH_POKEMON:
      return {
        ...state,
        pokemons: payload,
      };

    case POST_POKEMONS:
      return {
        ...state,
        pokemons: [...state.pokemons, payload],
        allPokemons: [...state.allPokemons, payload],
      };

    case FILTER_TYPE:
      return {
        ...state,
        searchTypes: payload,
      };

    case FILTER_BY_ORIGIN:
      if (payload === "All") {
        return {
          ...state,
          pokemons: state.allPokemons,
        };
      } else if (payload === "API") {
        const filteredApi = state.allPokemons.filter(
          (pokemon) => typeof pokemon.id === "number"
        );

        return {
          ...state,
          pokemons: filteredApi,
        };
      } else if (payload === "DB") {
        const filteredDb = state.allPokemons.filter(
          (pokemon) => typeof pokemon.id === "string"
        );

        console.log(filteredDb, "FILTERED DB");

        return {
          ...state,
          pokemons: filteredDb,
        };
      }

    case FILTER_POKEMON_BY_TYPES:
      return {
        ...state,
        pokemons: payload,
      };

    case ORDER:
      const orderCopy = [...state.pokemons];
      if (payload === "A") {
        orderCopy.sort((a, b) => a.name.localeCompare(b.name));
      } else if (payload === "D") {
        orderCopy.sort((a, b) => b.name.localeCompare(a.name));
      }

      return {
        ...state,
        pokemons: orderCopy,
      };

    case ORDER_ATTACK:
      const orderAttack = [...state.pokemons];
      if (payload === "AT-D") {
        orderAttack.sort((a, b) => a.attack - b.attack);
      } else if (payload === "AT-A") {
        orderAttack.sort((a, b) => b.attack - a.attack);
      }
      return {
        ...state,
        pokemons: orderAttack,
      };

    case RESET:
      if (payload === "Reset")
        return {
          ...state,
          pokemons: state.allPokemons,
        };
    default:
      return state;
  }
}

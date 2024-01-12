import {
  GET_ALL_POKEMONS,
  POST_POKEMONS,
  FILTER_TYPE,
  FILTER_BY_ORIGIN,
  ORDER,
  ORDER_ATTACK,
} from "./actions-types";

const initialState = {
  pokemons: [],
  allPokemons: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: payload,
        allPokemons: payload,
      };

    case POST_POKEMONS:
      return {
        ...state,
        pokemons: [...state.pokemons, payload],
        allPokemons: [...state.allPokemons, payload],
      };

    case FILTER_TYPE:
      if (payload === "All") {
        return {
          ...state,
          pokemons: state.allPokemons,
        };
      }

      const filteredType = state.allPokemons.filter(
        (pokemon) => pokemon.type === payload
      );
      return {
        ...state,
        pokemons: filteredType,
      };

    case FILTER_BY_ORIGIN:
      if (payload === "All") {
        return {
          ...state,
          pokemons: state.allPokemons,
        };
      } else if (payload === "API") {
        const filteredApi = state.allPokemons.filter(
          (pokemon) => typeof pokemon.id === "Number"
        );
        return {
          ...state,
          pokemons: filteredApi,
        };
      } else if (payload === "DB") {
        const filteredDb = state.allPokemons.filter(
          (pokemon) => typeof pokemon.id === "String"
        );
        return {
          ...state,
          pokemons: filteredDb,
        };
      }
    case ORDER:
      const orderCopy = [...state.pokemons];
      if (payload === "A") {
        orderCopy.sort((a, b) => a.name.localeCompare(b.name));
      } else if (payload === "D") {
        orderCopy.sort((a, b) => b.name.localeCompare(a.name));
        return {
          ...state,
          pokemons: orderCopy,
        };
      }
    case ORDER_ATTACK:
      const orderAttack = [...state.pokemons];
      if (payload === "AT A") {
        orderAttack.sort((a, b) => a.attack - b.attack);
      } else if (payload === "AT D") {
        orderAttack.sort((a, b) => b.attack - a.attack);
      }
      return {
        ...state,
        pokemons: orderAttack,
      };

    default:
      return state;
  }
}

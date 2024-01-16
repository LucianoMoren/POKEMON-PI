import React, { useState } from "react";
import style from "./Filter.module.css";
import { useDispatch } from "react-redux";
import { filterPokemonByType } from "../../redux/actions";

function Filter({ getT }) {
  const dispatch = useDispatch();
  console.log(getT, "ACA");
  const fPokemon = (pokemonType) => {
    dispatch(filterPokemonByType(pokemonType));
  };

  const [selectedType, setSelectedType] = useState("");

  const handleChange = (e) => {
    setSelectedType(e.target.value);
    if (e.target.value !== "") {
      fPokemon(e.target.value);
    }
  };

  return (
    <div className={style.bg}>
      <select onChange={handleChange}>
        <option value="">Types</option>
        {getT?.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;

import React, { useState } from "react";
import style from "./searchbar.module.css";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

function Searchbar() {
  const onSearch = () => {
    const name = req.query;
    const URL = `http://localhost:3001/pokemons/name?name=${name}`;
  };

  const [name, setName] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setName(value);
  };
  const handleClick = (event) => {
    event.preventDefault();

    setName("");
  };

  return (
    <div className={style.search}>
      <input
        placeholder="Enter the pokemon's name..."
        className={style.input}
        type="text"
        id="search"
        onChange={handleChange}
        value={name}
      ></input>
      <button className={style.btnSearch} onClick={handleClick}>
        <FaSearch className={style.searchIco} />
      </button>
    </div>
  );
}

export default Searchbar;

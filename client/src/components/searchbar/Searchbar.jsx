import { useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";

import style from "./searchbar.module.css";
import { searchPokemon } from "../../redux/actions";

function Searchbar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleSearch = () => {
    dispatch(searchPokemon(name));
  };

  return (
    <div className={style.search}>
      <input
        placeholder="Enter the pokemon's name..."
        className={style.input}
        type="text"
        id="search"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button className={style.btnSearch} onClick={handleSearch}>
        <FaSearch className={style.searchIco} />
      </button>
    </div>
  );
}

export default Searchbar;

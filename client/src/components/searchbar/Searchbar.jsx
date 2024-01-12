import React from "react";
import style from "./searchbar.module.css";
import { FaSearch } from "react-icons/fa";

function Searchbar() {
  return (
    <div className={style.search}>
      <input
        placeholder="Enter the pokemon's name..."
        className={style.input}
      ></input>
      <button className={style.btnSearch}>
        <FaSearch className={style.searchIco} />
      </button>
    </div>
  );
}

export default Searchbar;

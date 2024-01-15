import React, { useState } from "react";
import style from "./Filter.module.css";

function Filter() {
  return (
    <div className={style.bg}>
      <div>
        <h1>Filters</h1>
      </div>
      <div>
        <button>Types</button>
        <button>API</button>
        <button>DB</button>
      </div>
    </div>
  );
}

export default Filter;

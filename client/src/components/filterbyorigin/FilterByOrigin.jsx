import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByOrigin } from "../../redux/actions";
import style from "./filterbyorigin.module.css";

function FilterByOrigin() {
  const dispatch = useDispatch();
  const [apiDbFilter, setApiDbFilter] = useState("All");

  const handleApiDbFilterChange = (e) => {
    setApiDbFilter(e.target.value);
    dispatch(filterByOrigin(e.target.value));
  };

  return (
    <div className={style.bg}>
      <select value={apiDbFilter} onChange={handleApiDbFilterChange}>
        <option value="All">All</option>
        <option value="API">Api</option>
        <option value="DB">Db</option>
      </select>
    </div>
  );
}

export default FilterByOrigin;

import React, { useState } from "react";
import style from "./home.module.css";
import Cards from "../cards/Cards";
import Pagination from "../pagination/Pagination";
import Navbar from "../navbar/Navbar";
import Order from "../order/Order";
import { Link } from "react-router-dom";
import Filter from "../filter/Filter";
import FilterByOrigin from "../filterbyorigin/FilterByOrigin";
import Reset from "../reset/Reset";

function Home({ pokemons, getT }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPokemons = pokemons.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={style.bg}>
      <Navbar />

      <div className={style.complete}>
        <div className={style.filtersControllers}>
          <div className={style.orderAndFilter}>
            <div className={style.title}>
              <h3>Order</h3>
            </div>
            <Order />
            <div className={style.title}>
              <h3>Filters</h3>
            </div>
            <FilterByOrigin />
            <Filter getT={getT} />
            <div className={style.title}>
              <h3>Reset</h3>
            </div>
            <Reset />
          </div>

          <Link to="/form">
            <button className={style.btnCreate}>CREATE YOUR POKEMON</button>
          </Link>
        </div>

        <div className={style.general}>
          <div className={style.pokemons}>
            <Cards pokemons={currentPokemons} />
          </div>
          <div className={style.pagination}>
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={pokemons.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

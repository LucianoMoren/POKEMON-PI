import React, { useState } from "react";
import style from "./home.module.css";
import Cards from "../cards/Cards";
import Pagination from "../pagination/Pagination";
import Navbar from "../navbar/Navbar";
import Order from "../order/Order";
import { Link } from "react-router-dom";
import Form from "../form/Form";

function Home({ pokemons }) {
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
          <Order />

          <Link to="/form">
            <button>CREATE YOUR POKEMON</button>
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

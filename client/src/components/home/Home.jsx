import React, { useState } from "react";
import style from "./home.module.css";
import Cards from "../cards/Cards";
import Pagination from "../pagination/Pagination";
import Navbar from "../navbar/Navbar";

function Home({ pokemons }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Calcula el índice de inicio y fin para la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPokemons = pokemons.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={style.bg}>
      <Navbar />
      <Cards pokemons={currentPokemons} />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={pokemons.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Home;

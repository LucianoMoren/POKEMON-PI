import "./App.css";
import axios from "axios";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/landing/landing";
import Detail from "./components/detail/Detail";
import Form from "./components/form/Form";
import About from "./components/about/About";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, getTypes } from "../src/redux/actions";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./components/home/Home";

function App() {
  const getT = useSelector((state) => state.searchTypes);

  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypes());

    const PokemonsA = async () => {
      const URL = "http://localhost:3001/pokemons";
      try {
        const { data } = await axios.get(URL);

        if (data) {
          dispatch(getAllPokemons(data));
        }
      } catch (error) {
        console.log("Error al traer Pokemons:", error.message);
      }
    };

    PokemonsA();
  }, []);

  return (
    <ErrorBoundary>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/home" element={<Home pokemons={pokemons} />}></Route>
          <Route path="/pokemons/:id" element={<Detail />}></Route>
          <Route path="/form" element={<Form getT={getT} />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </React.Fragment>
    </ErrorBoundary>
  );
}

export default App;

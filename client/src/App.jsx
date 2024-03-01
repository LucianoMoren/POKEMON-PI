import "./App.css";
import axios from "axios";
import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Detail from "./components/detail/Detail";
import Form from "./components/form/Form";
import About from "./components/about/About";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, getTypes } from "../src/redux/actions";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./components/home/Home";
const URL_API = import.meta.env.VITE_URL_API;

function App() {
  const navigate = useNavigate();

  const returnHome = () => {
    navigate("/home");
  };

  const getT = useSelector((state) => state.searchTypes);

  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypes());

    const PokemonsA = async () => {
      const URL = `${URL_API}/pokemons`;
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
          <Route
            path="/home"
            element={<Home pokemons={pokemons} getT={getT} />}
          ></Route>
          <Route path="/pokemons/:id" element={<Detail />}></Route>
          <Route
            path="/form"
            element={
              <Form getT={getT} returnHome={returnHome} pokemons={pokemons} />
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </React.Fragment>
    </ErrorBoundary>
  );
}

export default App;

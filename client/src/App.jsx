import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/landing/landing";
import Home from "./components/home/home";
import Detail from "./components/detail/detail";
import Form from "./components/form/Form";
import About from "./components/about/About";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;

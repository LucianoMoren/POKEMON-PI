import React from "react";
import style from "./landig.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import pokeball from "../../assets/images/pokeball-red.png";
import lighting from "../../assets/images/lighting.svg";
import { FaLocationArrow } from "react-icons/fa";

function Landing() {
  return (
    <div className={style.bg}>
      <img src={logo} alt="logotipe" className={style.logo} />
      <NavLink to="/home" className={style.a}>
        <button className={style.btn}>
          Click here <FaLocationArrow className={style.arrowIco} />
        </button>
      </NavLink>
      <h1 className={style.title}>Who will be there?</h1>
      <p className={style.paragraph}>
        Discover your favorite Pokémon now! Click here and find out who will be
        there.
      </p>
      <img src={lighting} alt="logotipe" className={style.lighting} />
      <img src={pokeball} alt="logotipe" className={style.pokeball} />
    </div>
  );
}

export default Landing;

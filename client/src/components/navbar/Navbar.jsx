import React from "react";
import style from "./navbar.module.css";
import image from "../../assets/images/logo.svg";
import Searchbar from "../searchbar/Searchbar";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={style.nav}>
      <div className={style.image}>
        <img src={image} alt="logotype" />
      </div>

      <Searchbar />
      <div className={style.btn}>
        <Link to={"/about"} className={style.a}>
          <button className={style.btnAbout}>About me</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

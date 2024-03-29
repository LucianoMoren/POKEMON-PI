import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import style from "./detail.module.css";
import { TfiBackLeft } from "react-icons/tfi";
const URL_API = import.meta.env.VITE_URL_API;

function Detail() {
  const { id } = useParams();

  const URL = `${URL_API}/pokemons/${id}`;

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`${URL}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay pokemon con este Name");
      }
    });
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.bg}>
      <div className={style.home}>
        <Link to={"/home"}>
          <button>
            <TfiBackLeft className={style.ico} />
          </button>
        </Link>
      </div>

      <div className={style.detail}>
        <div className={style.title}>
          <p>{character.name}</p>
          <p className={style.id}>N.º {character.id}</p>
        </div>
        <div className={style.megaData}>
          <div className={style.image}>
            <img src={character.image} alt={character.name} />
          </div>
          <div className={style.superData}>
            <div className={style.data}>
              <div className={style.hw}>
                <div>
                  <p className={style.princ}>Height</p>
                  <p> {character.height}</p>
                </div>
                <div>
                  <p className={style.princ}>Weight</p>
                  <p> {character.weight}</p>
                </div>
              </div>
              <div>
                <p className={style.princ}>Types</p>
                <p>{character.Types}</p>
              </div>
            </div>

            <div className={style.stats}>
              <div>
                <p className={style.princ}>Hp</p>
                <p>{character.hp}</p>
              </div>
              <div>
                <p className={style.princ}>Attack</p>
                <p>{character.attack}</p>
              </div>
              <div>
                <p className={style.princ}>Defense</p>
                <p>{character.defense}</p>
              </div>
              <div>
                <p className={style.princ}>Speed</p>
                <p>{character.speed}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;

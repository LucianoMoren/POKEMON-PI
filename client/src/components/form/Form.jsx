import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postPokemons } from "../../redux/actions";
import style from "./form.module.css";

function Form() {
  const dispatch = useDispatch();

  const [create, setCreate] = useState({
    name: "",
    height: "",
    weight: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    types: [],
    image: new File([], ""),
  });

  console.log(create);
  const sendFormData = async () => {
    try {
      const formData = {
        name: create.name,
        height: create.height,
        weight: create.weight,
        hp: create.hp,
        attack: create.attack,
        defense: create.defense,
        speed: create.speed,
        types: create.types,
        image: create.image.name,
      };

      dispatch(postPokemons(formData));
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === "file" ? e.target.files[0] : value;

    setCreate((prevCreate) => ({
      ...prevCreate,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendFormData();
  };

  return (
    <div className={style.Card}>
      <form onSubmit={handleSubmit}>
        {/* Columna Izquierda */}
        <div className={style.option}>
          <div className={style.nameBreed}>
            <input
              type="text"
              name="name"
              value={create.name}
              onChange={handleChange}
              placeholder="Pokemon name"
              className={style.nombre}
            />
          </div>

          <div className={style.weight}>
            <input
              type="text"
              name="height"
              value={create.height}
              onChange={handleChange}
              placeholder="Height"
              className={style.weightMin}
            />

            <input
              type="text"
              name="weight"
              value={create.weight}
              onChange={handleChange}
              placeholder="Weight"
              className={style.weightMax}
            />
          </div>

          <div className={style.height}>
            {" "}
            <input
              type="text"
              name="hp"
              value={create.hp}
              onChange={handleChange}
              placeholder="Hp"
              className={style.heightMin}
            />
            <input
              type="text"
              name="attack"
              value={create.attack}
              onChange={handleChange}
              placeholder="Attack"
              className={style.heightMax}
            />
          </div>

          <div className={style.lifeSpan}>
            <input
              type="text"
              name="defense"
              value={create.defense}
              onChange={handleChange}
              placeholder="Defense"
              className={style.lifeSpanMin}
            />
            <input
              type="text"
              name="speed"
              value={create.speed}
              onChange={handleChange}
              placeholder="Speed"
              className={style.lifeSpanMax}
            />
          </div>

          <div className={style.temp}>
            {/* <select
              name="temperamento"
              value={selectedTemperaments}
              onChange={handleTemperamentoChange}
              multiple
              className={style.temperamento}
            >
              <option value="Select Temperament...">Select Type...</option>
              {tFiltrados.map((temp, index) => (
                <option key={index} value={temp}>
                  {temp}
                </option>
              ))}
            </select> */}
          </div>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className={style.imagen}
          />

          <input type="submit" value="submit" className={style.submitButton} />
        </div>
      </form>
    </div>
  );
}

export default Form;

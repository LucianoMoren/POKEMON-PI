// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { postPokemons } from "../../redux/actions";
// import style from "./form.module.css";
// import pokeball from "../../assets/images/pokeball-red.png";
// import validation from "./validation";
// import { TfiBackLeft } from "react-icons/tfi";

// function Form({ getT, returnHome, pokemons }) {
//   const dispatch = useDispatch();

//   const [randomImage, setRandomImage] = useState("");
//   const [create, setCreate] = useState({
//     name: "",
//     height: "",
//     weight: "",
//     hp: "",
//     attack: "",
//     defense: "",
//     speed: "",
//     types: [],
//     image: "",
//   });

//   const [types, setTypes] = useState([]);
//   const [errors, setErrors] = useState({});

//   const handlerTypes = (e) => {
//     const selectedType = e.target.value;
//     if (!types.includes(selectedType)) {
//       setTypes((prevType) => [...prevType, selectedType]);
//       setCreate((prevCreate) => ({
//         ...prevCreate,
//         types: [...types, selectedType],
//       }));
//     }
//   };
//   const handleChange = (e) => {
//     const { name, value, type } = e.target;
//     const newValue = type === "file" ? e.target.files[0] : value;

//     setCreate((prevCreate) => ({
//       ...prevCreate,
//       [name]: newValue,
//     }));
//   };

//   useEffect(() => {
//     // Validación en vivo
//     const validationErrors = validation(create);
//     setErrors(validationErrors);
//   }, [create]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validación final antes de enviar
//     const validationErrors = validation(create);
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       sendFormData();
//     }
//   };

//   const sendFormData = async () => {
//     try {
//       const formData = {
//         name: create.name,
//         height: create.height,
//         weight: create.weight,
//         hp: create.hp,
//         attack: create.attack,
//         defense: create.defense,
//         speed: create.speed,
//         types: create.types,
//         image: create.image,
//       };

//       dispatch(postPokemons(formData));
//       alert("Pokemon creado con exito");
//     } catch (error) {
//       console.log(error.message);
//       alert("Algo salio mal, intentelo de nuevo");
//     }
//   };

//   const handleRandomImage = () => {
//     const randomIndex = Math.floor(Math.random() * pokemons.length);
//     const randomPokemon = pokemons[randomIndex];

//     setCreate((prevCreate) => ({
//       ...prevCreate,
//       image: randomPokemon.image,
//     }));
//     setRandomImage(randomPokemon.image);
//   };

//   return (
//     <div className={style.bg}>
//       <div className={style.home}>
//         <a href="../home">
//           <TfiBackLeft className={style.ico} />
//         </a>
//       </div>
//       <form onSubmit={handleSubmit} className={style.form}>
//         <input
//           type="text"
//           name="name"
//           value={create.name}
//           onChange={handleChange}
//           placeholder="Pokemon name"
//           className={style.input}
//         />
//         <p className={style.error}>{errors.name ? errors.name : null}</p>
//         <input
//           type="text"
//           name="height"
//           value={create.height}
//           onChange={handleChange}
//           placeholder="Height"
//           className={style.input}
//         />
//         <p className={style.error}>{errors.height ? errors.height : null}</p>
//         <input
//           type="text"
//           name="weight"
//           value={create.weight}
//           onChange={handleChange}
//           placeholder="Weight"
//           className={style.input}
//         />
//         <p className={style.error}>{errors.weight ? errors.weight : null}</p>
//         <input
//           type="text"
//           name="hp"
//           value={create.hp}
//           onChange={handleChange}
//           placeholder="Hp"
//           className={style.input}
//         />
//         <p className={style.error}>{errors.hp ? errors.hp : null}</p>
//         <input
//           type="text"
//           name="attack"
//           value={create.attack}
//           onChange={handleChange}
//           placeholder="Attack"
//           className={style.input}
//         />
//         <p className={style.error}>{errors.attack ? errors.attack : null}</p>
//         <input
//           type="text"
//           name="defense"
//           value={create.defense}
//           onChange={handleChange}
//           placeholder="Defense"
//           className={style.input}
//         />
//         <p className={style.error}>{errors.defense ? errors.defense : null}</p>
//         <input
//           type="text"
//           name="speed"
//           value={create.speed}
//           onChange={handleChange}
//           placeholder="Speed"
//           className={style.input}
//         />
//         <p className={style.error}>{errors.speed ? errors.speed : null}</p>
//         <select
//           name="types"
//           value={types}
//           onChange={handlerTypes}
//           multiple
//           className={style.types}
//         >
//           <option value="Selected Type...">Select Type...</option>
//           {getT.map((temp, index) => (
//             <option key={index} value={temp}>
//               {temp}
//             </option>
//           ))}
//         </select>
//         <button type="button" onClick={handleRandomImage}>
//           Seleccionar Imagen Aleatoria
//         </button>
//         {randomImage && (
//           <img
//             src={randomImage}
//             alt="Random Preview"
//             className={style.previewImage}
//           />
//         )}
//         <input
//           type="submit"
//           value="SUBMIT"
//           className={style.submitButton}
//           disabled={Object.keys(errors).length > 0}
//         />
//       </form>
//     </div>
//   );
// }

// export default Form;
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { postPokemons } from "../../redux/actions";
import style from "./form.module.css";
import pokeball from "../../assets/images/pokeball-red.png";
import validation from "./validation";
import { TfiBackLeft } from "react-icons/tfi";

function Form({ getT, returnHome, pokemons }) {
  const dispatch = useDispatch();

  const [randomImage, setRandomImage] = useState("");
  const [create, setCreate] = useState({
    name: "",
    height: "",
    weight: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    types: [],
    image: "",
  });

  const [types, setTypes] = useState([]);
  const [errors, setErrors] = useState({});

  const handlerTypes = (e) => {
    const selectedType = e.target.value;
    if (!types.includes(selectedType)) {
      setTypes((prevType) => [...prevType, selectedType]);
      setCreate((prevCreate) => ({
        ...prevCreate,
        types: [...types, selectedType],
      }));
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

  useEffect(() => {
    // Validación en vivo
    const validationErrors = validation(create);
    setErrors(validationErrors);
  }, [create]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación final antes de enviar
    const validationErrors = validation(create);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      sendFormData();
    }
  };

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
        image: create.image,
      };

      dispatch(postPokemons(formData));
      alert("Pokemon creado con exito");
    } catch (error) {
      console.log(error.message);
      alert("Algo salio mal, intentelo de nuevo");
    }
  };

  const handleRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    const randomPokemon = pokemons[randomIndex];

    setCreate((prevCreate) => ({
      ...prevCreate,
      image: randomPokemon.image,
    }));
    setRandomImage(randomPokemon.image);
  };

  return (
    <div className={style.bg}>
      <div className={style.home}>
        <a href="../home">
          <TfiBackLeft className={style.ico} />
        </a>
      </div>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.padre}>
          <div className={style.forme}>
            <input
              type="text"
              name="name"
              value={create.name}
              onChange={handleChange}
              placeholder="Pokemon name"
              className={style.input}
            />
            <p className={style.error}>{errors.name ? errors.name : null}</p>
            <input
              type="text"
              name="height"
              value={create.height}
              onChange={handleChange}
              placeholder="Height"
              className={style.input}
            />
            <p className={style.error}>
              {errors.height ? errors.height : null}
            </p>
            <input
              type="text"
              name="weight"
              value={create.weight}
              onChange={handleChange}
              placeholder="Weight"
              className={style.input}
            />
            <p className={style.error}>
              {errors.weight ? errors.weight : null}
            </p>
            <input
              type="text"
              name="hp"
              value={create.hp}
              onChange={handleChange}
              placeholder="Hp"
              className={style.input}
            />
            <p className={style.error}>{errors.hp ? errors.hp : null}</p>
            <input
              type="text"
              name="attack"
              value={create.attack}
              onChange={handleChange}
              placeholder="Attack"
              className={style.input}
            />
            <p className={style.error}>
              {errors.attack ? errors.attack : null}
            </p>
            <input
              type="text"
              name="defense"
              value={create.defense}
              onChange={handleChange}
              placeholder="Defense"
              className={style.input}
            />
            <p className={style.error}>
              {errors.defense ? errors.defense : null}
            </p>
            <input
              type="text"
              name="speed"
              value={create.speed}
              onChange={handleChange}
              placeholder="Speed"
              className={style.input}
            />
            <p className={style.error}>{errors.speed ? errors.speed : null}</p>
            <select
              name="types"
              value={types}
              onChange={handlerTypes}
              multiple
              className={style.types}
            >
              <option value="Selected Type...">Select Type...</option>
              {getT.map((temp, index) => (
                <option key={index} value={temp}>
                  {temp}
                </option>
              ))}
            </select>
            <input
              type="submit"
              value="SUBMIT"
              className={style.submitButton}
              disabled={Object.keys(errors).length > 0}
            />
          </div>
          <div className={style.imgg}>
            <button
              type="button"
              onClick={handleRandomImage}
              className={style.btnn}
            >
              Seleccionar Imagen Aleatoria
            </button>
            {randomImage && (
              <img
                src={randomImage}
                alt="Random Preview"
                className={style.previewImage}
              />
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;

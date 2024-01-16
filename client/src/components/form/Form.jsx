// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { postPokemons, getTypes } from "../../redux/actions";
// import style from "./form.module.css";

// function Form({ getT }) {
//   const dispatch = useDispatch();

//   const [create, setCreate] = useState({
//     name: "",
//     height: "",
//     weight: "",
//     hp: "",
//     attack: "",
//     defense: "",
//     speed: "",
//     types: [],
//     image: new File([], ""),
//   });
//   const [types, setTypes] = useState([]);

//   const handlerTypes = (e) => {
//     const selectedType = e.target.value;

//     if (!types.includes(selectedType)) {
//       setTypes((prevType) => [...prevType, selectedType]);
//     }
//     setCreate((prevCreate) => ({ ...prevCreate, types: types }));
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
//         image: create.image.name,
//       };

//       dispatch(postPokemons(formData));
//     } catch (error) {
//       console.log(error.message);
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

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     sendFormData();
//   };

//   return (
//     <div className={style.bg}>
//       <div className={style.father}>
//         <div className={style.image}></div>
//         <form onSubmit={handleSubmit} className={style.form}>
//           <input
//             type="text"
//             name="name"
//             value={create.name}
//             onChange={handleChange}
//             placeholder="Pokemon name"
//             className={style.input}
//           />
//           <input
//             type="text"
//             name="height"
//             value={create.height}
//             onChange={handleChange}
//             placeholder="Height"
//             className={style.input}
//           />

//           <input
//             type="text"
//             name="weight"
//             value={create.weight}
//             onChange={handleChange}
//             placeholder="Weight"
//             className={style.input}
//           />

//           <input
//             type="text"
//             name="hp"
//             value={create.hp}
//             onChange={handleChange}
//             placeholder="Hp"
//             className={style.input}
//           />
//           <input
//             type="text"
//             name="attack"
//             value={create.attack}
//             onChange={handleChange}
//             placeholder="Attack"
//             className={style.input}
//           />

//           <input
//             type="text"
//             name="defense"
//             value={create.defense}
//             onChange={handleChange}
//             placeholder="Defense"
//             className={style.input}
//           />
//           <input
//             type="text"
//             name="speed"
//             value={create.speed}
//             onChange={handleChange}
//             placeholder="Speed"
//             className={style.input}
//           />

//           <select
//             name="types"
//             value={types}
//             onChange={handlerTypes}
//             multiple
//             className={style.types}
//           >
//             <option value="Selected Type...">Select Type...</option>
//             {getT.map((temp, index) => (
//               <option key={index} value={temp}>
//                 {temp}
//               </option>
//             ))}
//           </select>

//           <input
//             type="file"
//             name="image"
//             accept="image/*"
//             onChange={handleChange}
//             className={style.input}
//           />
//           <input type="submit" value="SUBMIT" className={style.submitButton} />
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Form;
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postPokemons, getTypes } from "../../redux/actions";
import style from "./form.module.css";

function Form({ getT }) {
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
  const [types, setTypes] = useState([]);

  const handlerTypes = (e) => {
    const selectedType = e.target.value;

    if (!types.includes(selectedType)) {
      setTypes((prevType) => [...prevType, selectedType]);
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
        types: types, // Cambiado de create.types a types
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
    <div className={style.bg}>
      <div className={style.father}>
        <div className={style.image}></div>
        <form onSubmit={handleSubmit} className={style.form}>
          {/* ... otros campos de entrada ... */}
          <input
            type="text"
            name="name"
            value={create.name}
            onChange={handleChange}
            placeholder="Pokemon name"
            className={style.input}
          />
          <input
            type="text"
            name="height"
            value={create.height}
            onChange={handleChange}
            placeholder="Height"
            className={style.input}
          />

          <input
            type="text"
            name="weight"
            value={create.weight}
            onChange={handleChange}
            placeholder="Weight"
            className={style.input}
          />

          <input
            type="text"
            name="hp"
            value={create.hp}
            onChange={handleChange}
            placeholder="Hp"
            className={style.input}
          />
          <input
            type="text"
            name="attack"
            value={create.attack}
            onChange={handleChange}
            placeholder="Attack"
            className={style.input}
          />

          <input
            type="text"
            name="defense"
            value={create.defense}
            onChange={handleChange}
            placeholder="Defense"
            className={style.input}
          />
          <input
            type="text"
            name="speed"
            value={create.speed}
            onChange={handleChange}
            placeholder="Speed"
            className={style.input}
          />
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
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className={style.input}
          />
          <input type="submit" value="SUBMIT" className={style.submitButton} />
        </form>
      </div>
    </div>
  );
}

export default Form;

// import React from "react";
// import style from "./card.module.css";
// import { Link } from "react-router-dom";
// import { PiSwordFill } from "react-icons/pi";

// function Card(props) {
//   const normalizedTypes = props.types.map((type) =>
//     typeof type === "string" ? { name: type } : type
//   );

//   const typeNames = normalizedTypes.map((type) => type.name).join(" && ");

//   return (
//     <div className={style.bg}>
//       <div className={style.contImage}>
//         <img src={props.image} alt={"asd"} />
//       </div>

//       <p className={style.attack}>
//         {props.attack} <PiSwordFill />
//       </p>
//       <div className={style.contData}>
//         <Link to={`/pokemons/${props.id}`} className={style.a}>
//           <h1>{props.name}</h1>
//         </Link>

//         <div className={style.types}>{typeNames}</div>
//       </div>
//     </div>
//   );
// }

// export default Card;
import React from "react";
import style from "./card.module.css";
import { Link } from "react-router-dom";
import { PiSwordFill } from "react-icons/pi";

const typeColors = {
  normal: "#B2B2B2",
  fighting: "#FD1E1B",
  flying: "#2C3AE1",
  poison: "#CE20DA",
  ground: "#A5612B ",
  rock: "#7D7D7D",
  bug: "#40951B ",
  ghost: "#2E119B ",
  steel: "#4E4E4E",
  fire: "#FF8622",
  water: "#479FF8",
  grass: "#65D91E",
  electric: "#CABD21 ",
  psychic: "#8B2AFF",
  ice: " #53E2CC ",
  dragon: "#2A2F88 ",
  dark: "#060606",
  fairy: "#E5598C",
  unknown: "#BADDD8",
  shadow: "#292929 ",
};

function Card(props) {
  const normalizedTypes = props.types.map((type) =>
    typeof type === "string" ? { name: type } : type
  );

  const typeElements = normalizedTypes.map((type, index) => (
    <span
      key={index}
      className={style.type}
      style={{ backgroundColor: typeColors[type.name.toLowerCase()] }}
    >
      {type.name}
    </span>
  ));

  return (
    <div className={style.bg}>
      <div className={style.contImage}>
        <img src={props.image} alt={"asd"} />
      </div>

      <p className={style.attack}>
        {props.attack} <PiSwordFill />
      </p>
      <div className={style.contData}>
        <Link to={`/pokemons/${props.id}`} className={style.a}>
          <h1>{props.name.toUpperCase()}</h1>
        </Link>

        <div className={style.types}>{typeElements}</div>
      </div>
    </div>
  );
}

export default Card;

//! ///////////////////////////////////////////////////////////////////////////
// function Card(props) {
//   const upperCaseName = capitalizeFirstLetter(props.name);

//   const formattedTypes = (props.types ?? []).map((type) => ({
//     name: capitalizeFirstLetter(type),
//     backgroundColor: typeColors[String(type).toLowerCase()] || "gray",
//   }));

//   console.log(formattedTypes, "asdasd");

//   return (
//     <div className={style.bg}>
//       <div className={style.contImage}>
//         <img src={props.image} alt={upperCaseName} />
//       </div>

//       <p className={style.attack}>
//         {props.attack} <PiSwordFill />
//       </p>
//       <div className={style.contData}>
//         <Link to={`/pokemons/${props.id}`} className={style.a}>
//           <h1>{upperCaseName}</h1>
//         </Link>

//         <div className={style.types}>
//           {formattedTypes.map((type, index) => (
//             <span
//               key={index}
//               style={{ backgroundColor: type.backgroundColor }}
//               className={style.span}
//             >
//               {type.name}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;
// import React from "react";
// import style from "./card.module.css";
// import { Link } from "react-router-dom";
// import { PiSwordFill } from "react-icons/pi";

// const typeColors = {
//   normal: "#B2B2B2",
//   fighting: "#FD1E1B",
//   flying: "#2C3AE1",
//   poison: "#CE20DA",
//   ground: "#A5612B ",
//   rock: "#7D7D7D",
//   bug: "#40951B ",
//   ghost: "#2E119B ",
//   steel: "#4E4E4E",
//   fire: "#FF8622",
//   water: "#479FF8",
//   grass: "#65D91E",
//   electric: "#CABD21 ",
//   psychic: "#8B2AFF",
//   ice: " #53E2CC ",
//   dragon: "#2A2F88 ",
//   dark: "#060606",
//   fairy: "#E5598C",
//   unknown: "#BADDD8",
//   shadow: "#292929 ",
// };

// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// function Card(props) {
//   const upperCaseName = props.name.toUpperCase();
//   console.log(props);

//   // Verificar si props.types es undefined y manejarlo
//   const formattedTypes = (props.types ?? []).map((type) => ({
//     name: capitalizeFirstLetter(type),
//     backgroundColor: typeColors[type.toLowerCase()] || "gray",
//   }));

//   return (
//     <div className={style.bg}>
//       <div className={style.contImage}>
//         <img src={props.image} alt={upperCaseName} />
//       </div>

//       <p className={style.attack}>
//         {props.attack} <PiSwordFill />
//       </p>
//       <div className={style.contData}>
//         <Link to={`/pokemons/${props.id}`} className={style.a}>
//           <h1>{upperCaseName}</h1>
//         </Link>

//         <div className={style.types}>
//           {formattedTypes.map((type, index) => (
//             <span
//               key={index}
//               style={{ backgroundColor: type.backgroundColor }}
//               className={style.span}
//             >
//               {type.name}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;

//! ///////////////////////////////////////////////////////////////////////////////////////

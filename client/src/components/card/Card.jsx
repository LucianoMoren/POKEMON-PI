// import React from "react";
// import style from "./card.module.css";

// // Mapeo de tipos a colores
// const typeColors = {
//   normal: "#B2B2B2",
//   fighting: "#FD1E1B",
//   flying: "#2C3AE1",
//   poison: "#CE20DA",
//   ground: "#A5612B ",
//   rock: "#7D7D7D",
//   bug: "#40951B ",
//   ghost: "#2E119B ",
//   steel: "4E4E4E",
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
//   // Convertir props.name a mayúsculas
//   const upperCaseName = props.name.toUpperCase();

//   // Capitalizar la primera letra de cada tipo y obtener el color correspondiente
//   const formattedTypes = props.types.map((type) => ({
//     name: capitalizeFirstLetter(type),
//     backgroundColor: typeColors[type.toLowerCase()] || "gray",
//   }));

//   return (
//     <div className={style.bg}>
//       <div className={style.contImage}>
//         <img src={props.image} alt={upperCaseName} />
//       </div>
//       <div className={style.contData}>
//         <h1>{upperCaseName}</h1>
//         <div className={style.types}>
//           {/* Mapear cada tipo a un span con su fondo de color correspondiente */}
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
import React from "react";
import style from "./card.module.css";
import { Link } from "react-router-dom";

const typeColors = {
  normal: "#B2B2B2",
  fighting: "#FD1E1B",
  flying: "#2C3AE1",
  poison: "#CE20DA",
  ground: "#A5612B ",
  rock: "#7D7D7D",
  bug: "#40951B ",
  ghost: "#2E119B ",
  steel: "4E4E4E",
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

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Card(props) {
  const upperCaseName = props.name.toUpperCase();

  // Verificar si props.types es undefined y manejarlo
  const formattedTypes = (props.types ?? []).map((type) => ({
    name: capitalizeFirstLetter(type),
    backgroundColor: typeColors[type.toLowerCase()] || "gray",
  }));

  return (
    <div className={style.bg}>
      <div className={style.contImage}>
        <img src={props.image} alt={upperCaseName} />
      </div>
      <div className={style.contData}>
        <Link to={`/pokemons/${props.id}`}>
          <h1>{upperCaseName}</h1>
        </Link>

        <div className={style.types}>
          {formattedTypes.map((type, index) => (
            <span
              key={index}
              style={{ backgroundColor: type.backgroundColor }}
              className={style.span}
            >
              {type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;

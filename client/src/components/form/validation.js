export default function validation(input) {
  const errors = {};

  // Validación de NAME
  if (!input.name.trim()) {
    errors.name = "Ingrese el nombre del Pokemon";
  } else if (input.name.trim().length > 20) {
    errors.name = "Máximo 20 caracteres permitidos";
  } else {
    errors.name = "Valor correcto";
  }

  // Validación de HEIGHT
  if (!input.height.trim()) {
    errors.height = "Ingrese la altura del Pokemon";
  } else if (input.height.trim().length > 3) {
    errors.height = "Máximo 3 caracteres permitidos";
  } else {
    errors.height = "Valor correcto";
  }

  // Validación de WEIGHT
  if (!input.weight.trim()) {
    errors.weight = "Ingrese el peso del Pokemon";
  } else if (input.weight.trim().length > 3) {
    errors.weight = "Máximo 3 caracteres permitidos";
  } else {
    errors.weight = "Valor correcto";
  }

  // Validación de HP
  if (!input.hp.trim()) {
    errors.hp = "Ingrese los puntos de salud (HP) del Pokemon";
  } else if (input.hp.trim().length > 3) {
    errors.hp = "Máximo 3 caracteres permitidos";
  } else {
    errors.hp = "Valor correcto";
  }

  // Validación de ATTACK
  if (!input.attack.trim()) {
    errors.attack = "Ingrese el valor de ataque del Pokemon";
  } else if (input.attack.trim().length > 3) {
    errors.attack = "Máximo 3 caracteres permitidos";
  } else {
    errors.attack = "Valor correcto";
  }

  // Validación de DEFENSE
  if (!input.defense.trim()) {
    errors.defense = "Ingrese el valor de defensa del Pokemon";
  } else if (input.defense.trim().length > 3) {
    errors.defense = "Máximo 3 caracteres permitidos";
  } else {
    errors.defense = "Valor correcto";
  }

  // Validación de SPEED
  if (!input.speed.trim()) {
    errors.speed = "Ingrese la velocidad del Pokemon";
  } else if (input.speed.trim().length > 3) {
    errors.speed = "Máximo 3 caracteres permitidos";
  } else {
    errors.speed = "Valor correcto";
  }

  return errors;
}
// export default function validation(input) {
//   const errors = {};

//   // Validación de NAME (string)
//   if (typeof input.name !== "string" || !input.name.trim()) {
//     errors.name = "Ingrese el nombre del Pokemon";
//   } else if (input.name.trim().length > 20) {
//     errors.name = "Máximo 20 caracteres permitidos";
//   } else {
//     errors.name = "Valor correcto";
//   }

//   // Validación de HEIGHT (number)
//   if (isNaN(input.height) || input.height.trim().length > 3) {
//     errors.height = "Ingrese una altura válida (máximo 3 caracteres)";
//   } else {
//     errors.height = "Valor correcto";
//   }

//   // Validación de WEIGHT (number)
//   if (isNaN(input.weight) || input.weight.trim().length > 3) {
//     errors.weight = "Ingrese un peso válido (máximo 3 caracteres)";
//   } else {
//     errors.weight = "Valor correcto";
//   }

//   // Validación de HP (number)
//   if (isNaN(input.hp) || input.hp.trim().length > 3) {
//     errors.hp = "Ingrese puntos de salud válidos (máximo 3 caracteres)";
//   } else {
//     errors.hp = "Valor correcto";
//   }

//   // Validación de ATTACK (number)
//   if (isNaN(input.attack) || input.attack.trim().length > 3) {
//     errors.attack = "Ingrese un valor de ataque válido (máximo 3 caracteres)";
//   } else {
//     errors.attack = "Valor correcto";
//   }

//   // Validación de DEFENSE (number)
//   if (isNaN(input.defense) || input.defense.trim().length > 3) {
//     errors.defense = "Ingrese un valor de defensa válido (máximo 3 caracteres)";
//   } else {
//     errors.defense = "Valor correcto";
//   }

//   // Validación de SPEED (number)
//   if (isNaN(input.speed) || input.speed.trim().length > 3) {
//     errors.speed = "Ingrese una velocidad válida (máximo 3 caracteres)";
//   } else {
//     errors.speed = "Valor correcto";
//   }

//   return errors;
// }

// Definición de la función Validation que realiza la validación de un objeto de entrada.
export default function Validation(input) {
  // Objeto que almacenará los mensajes de error.
  const error = {};

  // // Función que valida si una URL es válida para una imagen.
  // function isValidImageUrl(url) {
  //   // Expresión regular para validar la URL de la imagen y su extensión.
  //   const urlRegex =
  //     /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(:[0-9]+)?(\/.*)?$/i;

  //   // La URL debe cumplir con el patrón y tener una extensión de imagen válida.
  //   return urlRegex.test(url) && /\.(jpg|jpeg|svg|png|gif)$/i.test(url);
  // }

  // Validación del campo 'name'.
  if (input.name.length === 0) {
    error.name = "Debes ingresar un nombre.";
  }
  if (input.name.length < 5 && input.name.length > 0) {
    error.name = "El nombre debe tener más de 5 caracteres.";
  }
  if (input.name.length > 15) {
    error.name = "El nombre debe tener menos de 15 caracteres.";
  }

  // // Validación de la URL de la imagen.
  // if (!input.randomImage && !input.image.trim()) {
  //   error.image = "Se requiere la URL de la imagen.";
  // } else if (!isValidImageUrl(input.image)) {
  //   error.image = "URL de imagen no válida.";
  // }

  // Campos numéricos a validar.
  const numericFields = [
    "hp",
    "attack",
    "defense",
    "speed",
    "height",
    "weight",
  ];

  // Validación de campos numéricos.
  numericFields.forEach((field) => {
    // Obtener el valor numérico del campo.
    const numericValue = parseInt(input[field], 10);

    // Verificar si el campo está vacío.
    const isFieldEmpty =
      !input[field] ||
      (typeof input[field] === "string" && input[field].trim().length === 0);

    if (isFieldEmpty) {
      error[field] = `Debes ingresar un valor para ${field}.`;
    } else if (isNaN(numericValue) || numericValue <= 0) {
      error[field] = `${
        field.charAt(0).toUpperCase() + field.slice(1)
      } debe ser mayor a 0.`;
    } else if (isNaN(numericValue) || numericValue > 255) {
      error[field] = `${
        field.charAt(0).toUpperCase() + field.slice(1)
      } no puede ser mayor a 255.`;
    }
  });

  // Validación de tipos.
  if (!input.types.length) {
    error.types = "Se requiere al menos un tipo.";
  }
  if (input.types.length > 3) {
    error.types = "Solo puedes seleccionar tres tipos.";
  }

  // Devuelve el objeto con los mensajes de error acumulados.
  return error;
}

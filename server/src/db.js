// Configuración inicial
require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const PokemonModel = require("./models/Pokemons");
const TypeModel = require("./models/Type");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_RENDER_URL } = process.env;

// Creación de la instancia Sequelize
const sequelize = new Sequelize(DB_RENDER_URL, {
  logging: false,
  native: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const basename = path.basename(__filename);

// Array para almacenar definiciones de modelos
const modelDefiners = [];

// Lectura de archivos de modelos y almacenamiento en modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Aplicación de las definiciones de modelos a la instancia Sequelize
modelDefiners.forEach((model) => model(sequelize));

// Capitalización de los nombres de los modelos
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

PokemonModel(sequelize);
TypeModel(sequelize);

// Desestructuración de los modelos
const { Pokemons, Type } = sequelize.models;

// Definición de relaciones
Pokemons.belongsToMany(Type, { through: "pokemon_type", timestamps: false });
Type.belongsToMany(Pokemons, { through: "pokemon_type", timestamps: false });

// Exportación de modelos e instancia Sequelize
module.exports = {
  Pokemons,
  Type,
  conn: sequelize,
  ...sequelize.models,
  conn: sequelize,
};

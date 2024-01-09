const express = require("express");
const router = express.Router();
const pokemons = require("../controllers/pokemons");
const getCharById = require("../controllers/getCharById");
const getCharByName = require("../controllers/getCharByName");
const getTypesHandler = require("../controllers/types");

const createPokemon = require("../controllers/createPokemon");

module.exports = router;

router.post("/pokemons", createPokemon);
router.get("/pokemons/name", getCharByName);
router.get("/pokemons", pokemons);
router.get("/pokemons/:idPokemon", getCharById);
router.get("/types", getTypesHandler);

module.exports = router;

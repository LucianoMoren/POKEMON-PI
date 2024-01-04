const express = require("express");
const router = express.Router();
const pokemons = require("../controllers/pokemons");
const getCharById = require("../controllers/getCharById");
const getCharByName = require("../controllers/getCharByName");
const createPokemon = require("../controllers/createPokemon");
const types = require("../controllers/types");

// router.get("/pokemons", pokemons);
router.get("/pokemons/:idPokemon", getCharById);
// router.get("/pokemons/name", getCharByName);
// router.post("/pokemons", createPokemon);
// router.get("/types", types);

module.exports = router;

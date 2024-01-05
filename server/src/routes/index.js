const express = require("express");
const router = express.Router();
const pokemons = require("../controllers/pokemons");
const getCharById = require("../controllers/getCharById");
const getCharByName = require("../controllers/getCharByName");
const createPokemon = require("../controllers/createPokemon");
const types = require("../controllers/types");

//* COMPLETE
router.get("/pokemons", pokemons);
//* COMPLETE
router.get("/pokemons/name", getCharByName);
//* COMPLETE
router.get("/pokemons/:idPokemon", getCharById);
router.post("/pokemons", createPokemon);
// router.get("/types", types);

module.exports = router;

const express = require("express");
const router = express.Router();
const pokemons = require("../controllers/pokemons");
const getCharById = require("../controllers/getCharById");
const getCharByName = require("../controllers/getCharByName");
const types = require("../controllers/types");

const createPokemon = require("../controllers/createPokemon");

module.exports = router;

router.post("/pokemons", createPokemon);
router.get("/pokemons/name", getCharByName);
//* COMPLETE
router.get("/pokemons", pokemons);
router.get("/pokemons/:idPokemon", getCharById);
//* COMPLETE
//* COMPLETE

router.get("/types", types);

module.exports = router;

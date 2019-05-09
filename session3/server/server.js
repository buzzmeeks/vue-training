const express = require('express');
const app = express();
const JsonDB = require('node-json-db');
const { Config } = require('node-json-db/dist/lib/JsonDBConfig');
const bodyParser = require('body-parser');

const db = new JsonDB(new Config('server/data/pokemons.json', true, true, '/'));
db.reload();

app.use(bodyParser.json());

app.get('/pokemons', function(req, res) {
  const data = db.getData('/pokemons') || [];
  res.json(data);
});

app.post('/pokemons', function(req, res) {
  const pokemon = req.body;
  db.push('/pokemons[]', pokemon, true);
});

app.post('/belt', function(req, res) {
  const pokemon = req.body;
  db.push('/belt[]', pokemon, true);
});

app.post('/pokemons/:id/move', function(req, res) {
  const pokemonId = Number(req.params.id);
  let pokemons = db.getData('/pokemons') || [];

  const pokemon = pokemons.find(({ id }) => pokemonId === id);
  pokemons = pokemons.filter(({ id }) => pokemonId !== id);
  db.push('/pokemons', pokemons, true);
  db.push('/belt[]', pokemon, true);

  res.json({});
});

app.get('/belt', function(req, res) {
  const data = db.getData('/belt') || [];
  res.json(data);
});

app.post('/belt/:id/move', function(req, res) {
  const pokemonId = Number(req.params.id);
  let belt = db.getData('/belt') || [];

  const pokemon = belt.find(({ id }) => pokemonId === id);
  belt = belt.filter(({ id }) => pokemonId !== id);
  db.push('/belt', belt, true);
  db.push('/pokemons[]', pokemon, true);

  res.json({});
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

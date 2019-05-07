import axios from 'axios';

export async function fetchPokemon(id) {
  const { data: pokemonData } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const { data: speciesData } = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  const data = { ...pokemonData, ...speciesData };

  return {
    id: data.id,
    name: data.names.find(({ language }) => language.name === 'fr').name,
    image: data.sprites.front_default,
    types: data.types.map(({ type }) => type.name),
  };
}

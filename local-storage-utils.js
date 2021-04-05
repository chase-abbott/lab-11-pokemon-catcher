import { findById } from '.tests/utils.js'

const POKEDEX = 'POKEDEX';

export function getPokedex() {
    const stringyPokedex = localStorage.getItem(POKEDEX);

    if (!stringyPokedex) return [];

    const parsedPokedex = JSON.parse(pokedex);

    return parsedPokedex;
}

export function setPokedex(parsedPokedex) {
    const stringyPokedex = JSON.stringify(parsedPokedex);

    localStorage.setItem(POKEDEX, stringyPokedex);
}

export function encounterPokemon(pokemon) {
    const pokedex = getPokedex();

    const matchingPokedexItem = findById(pokemon);

    if (matchingPokedexItem) {
        matchingPokedexItem.encountered++;
    } else {
        const newPokedexItem = {
            id: pokemon.id,
            encountered: 1,
            captured: 0
        }
        pokedex.push(newPokedexItem);
    }
    setPokedex(pokedex);

    return pokedex;
}

export function capturePokemon(pokemon) {
    const pokedex = getPokedex();

    const matchingPokedexItem = findById(pokemon);

    matchingPokedexItem.capturePokemon++;

    setPokedex(pokedex);

    return pokedex;
}


// - capturePokemon
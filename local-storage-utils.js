import { findById } from './test/utils.js';
import { pokeData } from './data.js';

const POKEDEX = 'POKEDEX';

export function getPokedex() {
    const stringyPokedex = localStorage.getItem(POKEDEX);

    if (!stringyPokedex) return [];

    const parsedPokedex = JSON.parse(stringyPokedex);

    return parsedPokedex;
}

export function setPokedex(parsedPokedex) {
    const stringyPokedex = JSON.stringify(parsedPokedex);

    localStorage.setItem(POKEDEX, stringyPokedex);
}

export function encounterPokemon(pokemon) {
    const pokedex = getPokedex();

    const matchingPokedexItem = findById(pokedex, pokemon.pokemon);

    if (matchingPokedexItem) {
        matchingPokedexItem.encountered++;
    } else {
        const newPokedexItem = {
            id: pokemon.pokemon,
            encountered: 1,
            captured: 0
        };
        pokedex.push(newPokedexItem);
    }
    setPokedex(pokedex);

    return pokedex;
}

export function capturePokemon(pokemon) {
    const pokedex = getPokedex();

    const matchingPokedexItem = findById(pokedex, pokemon.pokemon);

    matchingPokedexItem.captured++;

    setPokedex(pokedex);

    return pokedex;
}

export function generateThreePokemon() {
    let randomNumber1 = getRandomIndex();
    let randomNumber2 = getRandomIndex();
    let randomNumber3 = getRandomIndex();

    while (randomNumber1 === randomNumber2
        || randomNumber2 === randomNumber3
        || randomNumber1 === randomNumber3) {
        randomNumber1 = getRandomIndex();
        randomNumber2 = getRandomIndex();
        randomNumber3 = getRandomIndex();
    }

    const poke1 = pokeData[randomNumber1];
    const poke2 = pokeData[randomNumber2];
    const poke3 = pokeData[randomNumber3];

    encounterPokemon(poke1);
    encounterPokemon(poke2);
    encounterPokemon(poke3);

    return [poke1, poke2, poke3];
}

function getRandomIndex() {
    return Math.floor(Math.random() * pokeData.length);
}

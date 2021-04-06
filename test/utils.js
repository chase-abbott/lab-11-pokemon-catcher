import { pokeData } from '../data.js';

export function findById(array, id) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

export function findByPokeName(pokemonName) {
    for (let item of pokeData) {
        if (item.pokemon === pokemonName) {
            return item;
        }
    }
}

export function findByType(array, pokemonType) {
    for (let item of array) {
        if (item.type === pokemonType)
            return item;
    }
}


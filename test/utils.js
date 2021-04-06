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

export function uniqueTypes(array) {
    const counts = [];
    for (let i = 0; i < array.length; i++) {
        counts[array[i]] = 1 + counts[array[i]] || 1;
    }
    return counts;
}

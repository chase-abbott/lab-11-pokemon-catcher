import { pokeData } from '../data.js'

export function findById(array, id) {
    for (let item of array) {
        if (item._id === id) {
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
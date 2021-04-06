// IMPORT MODULES under test here:
import { pokeData } from '../data.js';
import { findById } from './utils.js';
import { getPokedex } from '../local-storage-utils.js';

const test = QUnit.test;



test('Tests findbyId function', (expect) => {
    const expected = pokeData[0];

    const actual = findById(pokeData, 1)

    expect.equal(actual, expected);
});

test('Tests getPokedex function', (expect) => {
    const stringyPokedex = JSON.stringify(pokeData);

    localStorage.setItem('POKEDEX', stringyPokedex);

    const expected = JSON.parse(localStorage.getItem('POKEDEX'));

    const actual = getPokedex()
    expect.deepEqual(actual, expected);
});

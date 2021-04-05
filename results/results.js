import { getPokedex } from '../local-storage-utils.js';
import { renderTableRows } from './results-utils.js';

const table = document.querySelector('table');

const pokedex = getPokedex()

for (let array of pokedex) {
    const tr = renderTableRows(array);

    table.append(tr);
}
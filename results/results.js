import { getPokedex } from '../local-storage-utils.js';
import { renderTableRows } from './results-utils.js';

const button = document.querySelector('button');
const table = document.querySelector('table');

const pokedex = getPokedex();

for (let array of pokedex) {
    const tr = renderTableRows(array);

    table.append(tr);
}

button.addEventListener('click', () => {
    alert(JSON.stringify(pokedex));
    localStorage.clear();
    window.location = '../index.html';
});


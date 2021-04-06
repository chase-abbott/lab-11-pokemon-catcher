import { capturePokemon, generateThreePokemon } from './local-storage-utils.js';
import { findByPokeName } from './test/utils.js';

const radio1 = document.querySelector('#poke-id-1');
const radio2 = document.querySelector('#poke-id-2');
const radio3 = document.querySelector('#poke-id-3');

const img1 = document.querySelector('#poke-img-1');
const img2 = document.querySelector('#poke-img-2');
const img3 = document.querySelector('#poke-img-3');


const pEncounter1 = document.querySelector('#encounter-1')
const pEncounter2 = document.querySelector('#encounter-2')
const pEncounter3 = document.querySelector('#encounter-3')

const pCapture1 = document.querySelector('#capture-1')
const pCapture2 = document.querySelector('#capture-2')
const pCapture3 = document.querySelector('#capture-3')


const button = document.querySelector('#reset-button');

//state
let captures = 0;


function createPokemonDOM() {
    const threePokemon = generateThreePokemon();
    const pokedex = getPokedex();
    const matching1 = findById(pokedex, threePokemon[0].pokemon)
    const matching2 = findById(pokedex, threePokemon[1].pokemon)
    const matching3 = findById(pokedex, threePokemon[2].pokemon)

    radio1.value = threePokemon[0].pokemon;
    img1.src = threePokemon[0].url_image;
    pEncounter1.textContent = `Encountered: ${matching1.encountered}`;
    pCapture1.textContent = `Captured: ${matching1.captured}`;

    radio2.value = threePokemon[1].pokemon;
    img2.src = threePokemon[1].url_image;
    pEncounter2.textContent = `Encountered: ${matching2.encountered}`;
    pCapture2.textContent = `Captured: ${matching2.captured}`;

    radio3.value = threePokemon[2].pokemon;
    img3.src = threePokemon[2].url_image;
    pEncounter3.textContent = `Encountered: ${matching3.encountered}`;
    pCapture3.textContent = `Captured: ${matching3.captured}`;
}

createPokemonDOM();

button.addEventListener('click', () => {
    if (!document.querySelector('input:checked')) {
        alert('Please select a Pokemon');
        return;
    }

    captures++;

    if (captures === 10) {
        window.location = './results/index.html';
    }

    const selectedRadio = document.querySelector('input:checked');

    const pokeObject = findByPokeName(selectedRadio.value);

    capturePokemon(pokeObject);
    createPokemonDOM();
});

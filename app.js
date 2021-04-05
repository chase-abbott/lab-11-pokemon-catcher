import { capturePokemon, generateThreePokemon } from './local-storage-utils.js'
import { findByPokeName } from './test/utils.js';

const radio1 = document.querySelector('#poke-id-1');
const radio2 = document.querySelector('#poke-id-2');
const radio3 = document.querySelector('#poke-id-3');

const img1 = document.querySelector('#poke-img-1');
const img2 = document.querySelector('#poke-img-2');
const img3 = document.querySelector('#poke-img-3');

const button = document.querySelector('button');

//state
let captures = 0;

const threePokemon = generateThreePokemon();

function createPokemonDOM() {
    radio1.value = threePokemon[0].pokemon;
    img1.src = threePokemon[0].url_image;

    radio2.value = threePokemon[1].pokemon;
    img2.src = threePokemon[1].url_image;

    radio3.value = threePokemon[2].pokemon;
    img3.src = threePokemon[2].url_image;
}

createPokemonDOM();

button.addEventListener('click', () => {
    captures++;
    if (captures === 10) {
        window.location.href = './results/index.html';
    }

    const selectedRadio = document.querySelector('input:checked');

    const pokeObject = findByPokeName(selectedRadio.value);

    capturePokemon(pokeObject);
})


// grab dom
// img.src = threePokemon[0].url_image
//pokeLabel1.append(img1);
// pokeRadio1.value = threePokemon[0].pokemon
// img.src = threePokemon[1].url_image
// img.src = threePokemon[2].url_image
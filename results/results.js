import { getPokedex } from '../local-storage-utils.js';
import { findById, findByPokeName, uniqueTypes } from '../test/utils.js';

const button = document.querySelector('button');

let pokedex = getPokedex();

const names = [];
const captures = [];
const encounters = [];
const types = [];

for (let pokemon of pokedex) {
    names.push(pokemon.id);
    captures.push(pokemon.captured);
    encounters.push(pokemon.encountered);
}

for (let pokemon of pokedex) {
    let i = 1;
    const matchingPokemon = findById(pokedex, pokemon.id);
    const matchingName = findByPokeName(matchingPokemon.id);
    if (pokemon.captured >= 1) {
        types.push(matchingName.type_1);
        while (pokemon.captured > i) {
            types.push(matchingName.type_1);
            i++;
        }
    }
}

let uniqueTypesSet = new Set(types);
let uniqueTypesArray = Array.from(uniqueTypesSet);
const numberOfTypes = uniqueTypes(types);
const valueOfNumberOfTypes = Object.values(numberOfTypes);

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [
            {
                label: 'Pokemon Captured',
                data: captures,
                backgroundColor: [
                    'rgb(255, 191, 0)',
                ],
                borderColor: [
                    'rgb(0, 0, 0)',
                ],
                borderWidth: 1
            },
            {
                label: 'Pokemon Encountered',
                data: encounters,
                backgroundColor: [
                    'rgb(232, 63, 111)',
                ],
                borderColor: [
                    'rgb(0, 0, 0)',

                ],
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});



var don = document.getElementById('second-chart').getContext('2d');
var secondChart = new Chart(don, {
    type: 'doughnut',
    data: {
        labels: uniqueTypesArray,
        datasets: [
            {
                label: 'Pokemon Types',
                data: valueOfNumberOfTypes,
                backgroundColor: [
                    'rgb(255, 191, 0)',
                    'rgb(232, 63, 111)',
                    'rgb(34, 116, 165)',
                    'rgb(50, 147, 111)',
                    'rgb(255, 255, 255)',
                ],
                borderColor: [
                    'rgb(0, 0, 0))',
                ],
                borderWidth: 1
            },
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Types of Pokemon Caught'
            }
        }
    },
});

button.addEventListener('click', () => {
    alert(JSON.stringify(pokedex));
    localStorage.clear('POKEDEX');
    window.location = '../index.html';
});

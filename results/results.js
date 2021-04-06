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
    const matchingPokemon = findById(pokedex, pokemon.id);
    const matchingName = findByPokeName(matchingPokemon.id);
    types.push(matchingName.type_1);
}

let uniqueTypesSet = new Set(types);
let uniqueTypesArray = Array.from(uniqueTypesSet);
const numberOfTypes = uniqueTypes(types)

const valueOfNumberOfTypes = Object.values(numberOfTypes);

console.log(types)
console.log(numberOfTypes)
console.log(uniqueTypesArray);

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
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
            },
            {
                label: 'Pokemon Encountered',
                data: encounters,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',

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
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
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
                text: 'Pokemon Types Caught'
            }
        }
    },
});

button.addEventListener('click', () => {
    alert(JSON.stringify(pokedex));
    localStorage.clear('POKEDEX');
    window.location = '../index.html';
});

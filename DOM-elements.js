export function renderPokeLineItems(pokemon) {
    const pEncounters = document.createElement('p');
    const pCaptured = document.createElement('p');

    pEncounters.textContent = pokemon.pEncounters;
    pCaptured.textContent = pokemon.captured;
}
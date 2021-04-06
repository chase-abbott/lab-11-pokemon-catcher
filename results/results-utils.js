export function renderTableRows(arrayData) {
    const tr = document.createElement('tr');
    const tdPokemon = document.createElement('td');
    const tdEncountered = document.createElement('td');
    const tdCaptured = document.createElement('td');

    tdPokemon.textContent = arrayData.id;

    tdEncountered.textContent = arrayData.encountered;

    tdCaptured.textContent = arrayData.captured;

    tr.append(tdPokemon, tdEncountered, tdCaptured);

    return tr;
}
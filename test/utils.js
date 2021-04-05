export function findById(array, id) {
    return array.find(item => id === item.id);
}
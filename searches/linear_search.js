const arr = [
    10, 15, 9, 13, 1, 3, 5, 4, 6
];

const search_item = 13;
let searched_index = null;

for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === search_item) {
        searched_index = i;
        break;
    }
}

console.log(searched_index)
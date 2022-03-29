const arr = [
    10, 15, 9, 13, 1, 3, 5, 4, 6
];
arr.sort((a, b) => a - b);

const search_item = 10;
let searched = false;
let searched_index = null;

let low = 0;
let high = arr.length - 1;
let mid = parseInt(low + ((high - low) / (arr[high] - arr[low])) * (search_item - arr[low]))

while (!searched) {
    if (search_item === arr[mid]) {
        searched_index = mid;
        searched = true;
        break;
    } else {
        if (search_item > arr[mid]) {
            mid = mid + 1;
            low = mid;
        } else if (search_item < arr[mid]) {
            mid = mid - 1;
            high = mid;
        }
    }
}

console.log(searched, searched_index)
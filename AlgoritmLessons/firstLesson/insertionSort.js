let arr = [23, 34, 2, 54, 3, 3, 3, 4];

function insertionSort(arr) {
    let size = arr.length;
    for (let i = 0; i < size; ++i) {
        let tmp = 0;
        for (let j = i + 1; j < size; ++j) {
            if (arr[i] > arr[j]) {
                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}

console.log(insertionSort(arr));
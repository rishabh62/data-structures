const log = console.log;
let arr = [5, 4, 3, 2, 1];

function quickSort(arr, start, end) {
  if (start < end) {
    let pIndex = partition(arr, start, end);
    quickSort(arr, start, pIndex - 1);
    quickSort(arr, pIndex + 1, end);
  }
}

function partition(arr, start, end) {
  let pivot = arr[end];
  let pIndex = start;
  for (let i = start; i <= end; i++) {
    if (arr[i] <= pivot) {
      swap(arr, pIndex, i);
      pIndex++;
    }
  }
  return pIndex - 1;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

quickSort(arr, 0, arr.length - 1);
log(arr);

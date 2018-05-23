// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunkedArr = [];
  let index = 0;
  while (index < array.length) {
    chunkedArr.push(array.slice(index, size + index));
    index+=size;
  }
  return chunkedArr;
}

module.exports = chunk;

// function chunk(array, size) {
//   let chunkedArr = [];
//   let subArr = [];
//   for (let i of array) {
//     subArr.push(i);
//     if (subArr.length == size) {
//       chunkedArr.push(subArr);
//       subArr = [];
//     }
//   }
//   subArr.length > 0 && chunkedArr.push(subArr);
//   return chunkedArr;
// }

// function chunk(array, size) {
//   let chunkedArr = [];
//   for (let element of array) {
//     const last = chunkedArr[chunkedArr.length - 1];
//     if (!last || last.length === size) {
//       chunkedArr.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//   return chunkedArr;
// }

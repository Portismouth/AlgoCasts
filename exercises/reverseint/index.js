// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");

  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;

// function reverseInt(n) {
//   if (n === 0) {
//     return 0;
//   }
//   let num = n.toString();
//   let output = "";
//   let neg;
//   for (let char of num) {
//     if (char == "-") {
//       neg = char;
//     }
//     if (char == "0") {
//       break;
//     }
//     output = char + output;
//   }
//   if (neg) {
//     output = neg + output;
//   }
//   return parseInt(output);
// }

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  debugger;
  return str.split("").reduce((rev, char) => char + rev, "");
}

reverse('asdf');

module.exports = reverse;

// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

// function reverse(str) {
//   let result = "";
//   for (let char of str) {
//loop goes through character in order and prepends each character to result
//     result = char + result;
//   }
//   return result;
// }

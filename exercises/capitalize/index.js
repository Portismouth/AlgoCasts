// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let result = '';
  let index = 0;
  for (let char of str) {
    if (index === 0 || str[index - 1] === ' ') {
      result += char.toUpperCase();
    } else {
      result += char;
    }
    index++;
  }
  return result;
}

module.exports = capitalize;

// function capitalize(str) {
//   let words = [];
//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return words.join(' ');y
// }

// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, "")
    .split("")
    .sort()
    .join();
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   let string1 = buildCharMap(stringA);
//   let string2 = buildCharMap(stringB);

//   if (Object.keys(string1).length != Object.keys(string2).length) {
//     return false;
//   } else {
//     for (let x in string1) {
//       if (string1[x] !== string2[x]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// function buildCharMap(str) {
//   const charMap = {};
//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }
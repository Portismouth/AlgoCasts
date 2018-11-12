// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(str1, str2) {
  return cleanString(str1) === cleanString(str2);
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, '')
    .split('')
    .sort()
    .join();
}

module.exports = anagrams;

// function anagrams(str1, str2) {
//   const charMap1 = buildCharMap(str1);
//   const charMap2 = buildCharMap(str2);

//   if(Object.keys(charMap1).length !== Object.keys(charMap2).length) {
//     return false;
//   } else {
//     for(let char in charMap1) {
//       if(charMap1[char] !== charMap2[char]) {
//         return false;
//       }
//     }
//     return true;
//   }
// }

// function buildCharMap(str) {
//   const charMap = {};

//   for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }

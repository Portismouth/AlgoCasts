// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
  const levelLength = n + (n - 1);
  if (n === row) {
    return;
  }
  if (level.length === levelLength) {
    console.log(level);
    return pyramid(n, row + 1);
  }
  const midPoint = Math.floor(levelLength / 2);
  let brick = '';
  if (midPoint - row <= level.length && midPoint + row >= level.length) {
    brick = '#';
  } else {
    brick = ' ';
  }

  return pyramid(n, row, level + brick);
}

// function pyramid(n, row = 0, level = "") {
//   const levelLength = n + (n - 1);
//   if (n === row) {
//     return;
//   }
//   if (level.length === levelLength) {
//     console.log(level);
//     return pyramid(n, row + 1);
//   }

//   const midPoint = Math.floor(levelLength / 2);
//   let add;

//   if (midPoint - row <= level.length && midPoint + row >= level.length) {
//     add = "#";
//   } else {
//     add = " ";
//   }

//   pyramid(n, row, level + add);
// }

module.exports = pyramid;

// function pyramid(n) {
//   const rowLength = n + (n - 1);
//   const midPoint = Math.floor(rowLength / 2);

//   for (let row = 0; row < n; row++) {
//     let step = '';
//     for (let brick = 0; brick < rowLength; brick++) {
//       if (midPoint - row <= brick && midPoint + row >= brick) {
//         step += '#';
//       } else {
//         step += ' ';
//       }
//     }
//     console.log(step);
//   }
// }

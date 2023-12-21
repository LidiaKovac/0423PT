// Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN:
/*  
    n = 3
    output: 
arr=[    0 1 2
     0  [1 2 3]
     1  [8 9 4]
     2  [7 6 5]
    ]

    a[0] a[1] a[2]
    b[2] c[2] c[1]
    c[0] b[0] b[1]

    arr[0][0]
    arr[0][1]
    arr[0][2]

    arr[1][2]
    arr[2][2]
    arr[2][1]

    arr[2][0]
    arr[1][0]
    arr[1][1]
*/

const nxn = function (n) {
  //   n*n =>

  return res;
};
// const res = [];
// let counter = 1
// for (let y = 0; y < 3; y++) {
//   const riga = [];
//   for (let i = 0; i < 3; i++) {
//     riga.push(counter);
//     counter++
//   }
//   res.push(riga);
// }

// console.log(res)

const res = [];

for (let i = 0; i < 3; i++) {
  const riga = [];
  for (let y = 0; y < 3; y++) {
    riga.push("x");
    // counter++
  }
  res.push(riga);
}

const startRow = 0;
const startCol = 0;
const endRow = 3 - 1;
const endCol = 3 - 1;

let counter = 1;

for (let row = 0; row <= endRow; row++) {
  // righe
  //   foreach riempi riga
  // §1,2,3, aumenta counter, aumenta startRow, res[i]
  if (counter > 2) {
    startRow = 1;
    row = startRow;
  }
  for (let col = 0; col <= endCol; col++) {
    // if (col === 2) {
    //   col = 2;
    //   res[row][col] = counter;
    // }
    // if(row===2) {

    // }
    counter++;
  }
}
console.log(res);

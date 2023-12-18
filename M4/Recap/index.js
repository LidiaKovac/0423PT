const sum = function (a, b, c) {
  return a + b + c;
};

console.log(sum()); //NaN
// undefined + undefined + undefined = NaN
console.log(sum(2, 5, 6)); // 13
sum(); //non si vede
sum(6, 7, 2); // non si vede
const pippo = sum();
const x = sum(2, "xyz", 4);
const y = sum("2" - 2, "3", 5);
const z = sum(2 - "2", "3", 5);
const w = sum(-34, -56, -12);
console.log(w);
//NaN, 2xyz4, 435, 2235

// start, end, =>
for (let i = 0; i < 10; i++) {
  console.log(i); //0-9
}
for (let y = 12; y > 5; y--) {
  console.log(y); //12-6
}

const arr = ["A", "E", undefined, "I", "O", undefined, "U"];
//            0    1    2    3    4
// .length
for (let i = 0; i <= arr.length; i++) {
  // continue => salta l'iterazione
  if(!arr[i]) {
    continue
  } 

  if(arr[i] === "E") {
    console.log("TROVATO!", arr[i])
    break
  }
  // console.log(i); //0-5
  console.log(arr[i]); //A,E,I,O,U,undefined
  // break
}

// for (const vowel of arr) {
//   console.log(vowel); //A,E,I,O,U
// }

const fruit = "ananas";

switch (fruit) {
  case "apple":
    console.log("Bona questa mela");
    break;
  case "pear":
    console.log("Buona questa pera");
    break;
  case "kiwi":
    console.log("Li vuoi quei Kiwi?");
    break;
  default: 
    console.log("Lupo mangia frutta...")
}

// if(fruit === "apple") {

// }  else if(fruit === "pear") {

// } else if(fruit === "kiwi") {

// }

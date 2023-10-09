let farina = 500
let uova = 100
let zucchero = 250
let cioccolato = 50

let ciotola //undefined === vuota, pulita di lavandino
console.log("Valore della ciotola iniziale: " + ciotola) //undefined
ciotola = uova + zucchero //350
console.log("Valore della ciotola con uova + zucchero: " + ciotola) //350
//cambia il valore di ciotola in: 
//vecchio valore di ciotola + il valore di farina
ciotola = ciotola + farina //850
console.log("Valore finale della ciotola: " + ciotola) //850
// ciotola += farina //stesso risultato di ciotola = ciotola + farina


let ciotolaLidia = farina + uova + zucchero + cioccolato
console.log(ciotolaLidia)

let x = 12
let y = 45
x += y
//x = x + y

let variabile1 = "2" //stringa
let variabile2 = 2 //numero
console.log(variabile1 + variabile2) //"22"
console.log(parseInt(variabile1) + variabile2) //4



//crea una variabile che contiene il tuo nome
// let nome = pippo //senza virgolette, pippo === variabile. La variabile pippo non esiste
let nome = "pippo"
//costanti: 
const nome2 = "pippo ma non puo' essere cambiato"
nome2 = "ciao"





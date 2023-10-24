const frase = "ciao a tutti"
//.split => divide una stringa in un array in base al separatore
console.log(frase.split(" ")) //["ciao", "a", "tutti"]

const parola = "EPICODE"
console.log(parola.split("")) //["E", "P", "I", "C", "O", "D", "E"]

const allitterazione = "ciao cicci come ci camminate"
console.log(allitterazione.split("c")) //[iao, i, i, ome, i, amminate]

const capodanno = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
console.log(capodanno.reverse()) //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//ciao a tutti => ciao-a-tutti, ciao.....a.....tutti
const arrayDiParole = frase.split(" ") //["ciao", "a", "tutti"]
const fraseBoomer = arrayDiParole.join() //"ciao,a,tutti"
const fraseOriginale = arrayDiParole.join(" ") //"ciao a tutti"
const fraseBoomer2 = arrayDiParole.join(".......") //"ciao.......a.......tutti"
const fraseBoomer3 = arrayDiParole.join("☺") //"ciao☺a☺tutti"
console.log(fraseBoomer3)
// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali
 e per ogni elemento stampa in console se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

const checkArray = function (arrayDiNumeriCasuali) {
    let somma = 0
    for (let i = 0; i < arrayDiNumeriCasuali.length; i++) {
        if (arrayDiNumeriCasuali[i] > 5) {
            somma += arrayDiNumeriCasuali[i]
            console.log(arrayDiNumeriCasuali[i] + " E' maggiore di 5")
        } else {
            console.log(arrayDiNumeriCasuali[i] + " NON e' maggiore di 5")
        }
    }
    return somma
}

const getRandom = function () {
    return Math.round(Math.random() * 10)
}
const arrayRandom = [getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom()]
let sommaMaggiore5 = checkArray(arrayRandom)
console.log(sommaMaggiore5)


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa 
 fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (string) {
    // NO: let arrayStringa = string.split(" ") //"EPICODE ciao" => [EPICODE, ciao] MA, "EPICODEciao" => ??????
    if (string.startsWith("EPICODE")) {
        //string.indexOf("EPICODE") === 0
        return string
    } else return "EPICODE" + string
}

console.log(epify("EPICODE rocks"))
console.log(epify("STRIVE rocks"))



const shoppingCart = [
    {
        id: 1,
        nome: "Patate",
        quantita: 23,
        price: 4
    },
    {
        id: 2,
        nome: "Pomodori",
        quantita: 2,
        price: 1
    },
    {
        id: 3,
        nome: "Piadine",
        quantita: 5,
        price: 3
    },
    {
        id: 4,
        nome: "Macinato",
        quantita: 1,
        price: 7
    }
]

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". 
 Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio 
 (tenendo conto delle quantità di ogni oggetto).
 
*/

const calcoloCarrello = function () {
    //for
    let totale = 0
    for (let i = 0; i < shoppingCart.length; i++) {
        //price * quantita => per ogni ogg
        totale = totale + (shoppingCart[i].price * shoppingCart[i].quantita)
        //    totale += (shoppingCart[i].price * shoppingCart[i].quantita)
    }
    return totale
}

const totaleCarrello = calcoloCarrello()
console.log(totaleCarrello)


/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne 
ritorna la media aritmetica.
*/

const average = function (array) {
    //(6 + 7 + 4.5 + 5.9)/4
    // ???? / array.length
    //somma, for 
    let somma = 0
    for (let i = 0; i < array.length; i++) {
        somma += array[i]
    }

    return Math.round(somma / array.length)

}

const votiDiPierino = [6, 5, 4.5, 5.9, 3, 10]
console.log(average(votiDiPierino))


// Carrello e sconti particolari

/*


, 
PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).

In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. 
Altrimenti, aggiungi la spedizione.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [34, 5, 2, 50]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = marco //cambia il valore qui per provare se il tuo algoritmo funziona!

const clienti = []
clienti.push(marco, paul, amy)
// console.log(clienti.length) //3
// console.log(clienti)

const ambassadors = []
for (let i = 0; i < clienti.length; i++) {
  //isAmbassador e' true, (isAmbassador === true) => true
  //isAmbassador e' false, (isAmbassador === true) => false
  if (clienti[i].isAmbassador) {
    ambassadors.push(clienti[i])
    console.log(
      `Il cliente ${clienti[i].name} ${clienti[i].lastName} e' un ambassador`
    )
  } else {
    console.log(
      `Il cliente ${clienti[i].name} ${clienti[i].lastName} NON e' un ambassador`
    )
  }
}

console.log(ambassadors)

//costo totale carrello
//esegui la somma di tutti gli elementi di un array
// let carrelloFinale; //undefined + 1 => NaN
// let carrelloFinale = null; //null + 1 => NaN

// [34, 5, 2, 50]

// if (utenteCheEffettuaLAcquisto.isAmbassador) {
//   //sconto del 30%
//   //x:carrello = 30:100
//   //!(carrello * 30) / 100 => 30% di carrello
//   //carrello * 0.3
//   //carrello * 0.7
//   carrelloFinale -= (carrelloFinale * 30) / 100
//   // carrelloFinale *= 0.7
// }

// if (carrelloFinale < 100) {
//   carrelloFinale += shippingCost
// }

// console.log(`Il carrello di ${utenteCheEffettuaLAcquisto.name} e' di ${carrelloFinale}$`)

for (let i = 0; i < clienti.length; i++) {
  let carrelloFinale = 0
  for (let i = 0; i < prices.length; i++) {
    carrelloFinale += prices[i]
    //i = 0 => 0 += 34
    //i = 1 => 34 += 5
    //i = 2 => 39 += 2
    //i = 3 => 41 += 50
    //i = 4 FINE LOOP, valore finale 91
  }
  if (clienti[i].isAmbassador) {
    carrelloFinale -= (carrelloFinale * 30) / 100
  }

  if (carrelloFinale < 100) {
    carrelloFinale += shippingCost
  }

  console.log(`Il carrello di ${clienti[i].name} e' di ${carrelloFinale}$`)
}

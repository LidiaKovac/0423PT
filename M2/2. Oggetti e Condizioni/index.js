//STRINGHE - STRING
let stringaLunga = `Su piu righe` //stringa => backtick alt+96
let stringCorta = "Una riga sola: 'ciao' " //stringa
let stringaCorta2 = "Con virgolette singole" //stringa

let stringaVuota = "" //lunghezza 0
let stringaNONVuota = " " //lunghezza 1, e' uno spazio
//NUMERI - NUMBER
let numero = 123 //number
let sempreNumero = 1.3 //number
let ancheQuestoEUnNumero = -45 //number
let aNumber = parseInt("4") //4 => da stringa a numero
let notANumber = parseInt("ciao") //NaN => indica un errore di conversione da stringa a numero, E' COMUNQUE di tipo numero
let notANumberProva = parseInt("ciao 4") //NaN => indica un errore di conversione da stringa a numero, E' COMUNQUE di tipo numero
console.log()
//BOOLEANE => vero/falso
let hasBlueEyes = true
let hasGreenEyes = false

//UNDEFINED vs NULL
let laMiaVariabile //undefined, non esiste o non e' stato creato
notANumber = null //svuoto la variabile notANumber (riga 13), intenzionalmente vuoto

//OGGETTI
let utente = {
  //proprieta'
  nome: "Lidia",
  cognome: "Kovac",
  batch: "Fall20",
  hasWebcam: true,
  address: {
    via: "casa mia",
    civico: "22",
    citofono: "Kovac",
  },
  //errori comuni:

  //dentro gli oggetti NON si usa l'uguale
  // nome = "Lidia",

  //js cerca una variabile che si chiama Lidia => errore, non esiste
  // nome: Lidia,

  //dimenticare la virgola
  // nome: "Lidia"
}

// console.log(utente)

// console.log(utente.nome)
// console.log(utente.address.via)

// nomeVariabile = "qualcosa"
utente.cognome = "Cognome di mio marito" //simile a sintassi variabili
//errore comune:
// utente.cognome: "cognome di mio marito"
// console.log(utente)

let utente2 = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",  //utente.email
  address: { //utente.address
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159", //utente.address.geo.lat
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net", //utente.company.catchPhrase
    bs: "harness real-time e-markets", 
  },
}


//crea un oggetto che ti rappresenti, contenente nome cognome e email 
let me = {
  nome: "un nome",
  cognome: "un cognome",
  email: "un email"
}

//...

//OPERATORI ARITMETICI 

let modulo = 5 % 2 //1

//controlla se un numero e' pari
//se il risultato di x % 2 e' 0 => il numero e' pari 
//un numero e' divisibile per 3
// x % 3 se viene 0 => allora e' divisibile

let quiz = 2 * (4 / 2)

// console.log(5%3) //=> 1.6, senza dec 1 => 3 * 1 = 3 => 5 - 3 => ***2***
// console.log(5%6)
// console.log(67%3)
// console.log("ciao"%"interessanti") // NaN

//SOMMA 

let a = 2 + 2 //4
let b = "2" + "2" //"22"
let c = 2 + "2" //"22"
let c2 = 2 + 2 + "2" //"42"
console.log(c2)
let c3 = "2" + 2 + 2
console.log(c3)

let d = c + 45 //"2245"
let e = parseInt(c) + 45 //67
let f = parseInt(c) + "45" //"2245"
let g = parseInt(c) + "pippo" //"22pippo"
let h = parseInt("ciao") + parseInt("pippo") //NaN + NaN = NaN
console.log(h)

//OPERATORI LOGICI
let altezza = 190
let isMoltoAlto = altezza > 200 //true o false, in base al valore di altezza 
//                  190 > 200 => false
// altezza = 210 => 
//                210 > 200 => true
//                210 < 200 => false
// <= >=
console.log(isMoltoAlto)
//se isMoltoAlto === true => fai qualcosa

//OPERATORI DI UGUAGLIANZA
//== NO
//=== SI

console.log("2" == 2) //vero 
//       Stringa  Numero  
console.log("2" === 2) //falso
//       Stringa  Numero
console.log(parseInt("2") === 2) //true
console.log(parseFloat("22.4")) //22.4
console.log("3" == 2) //false
console.log(3 == 2) //false
// === controlla valore + tipo
// == controlla solo valore
console.log("ci" === 2) //false
console.log("ci" === "ci") //true
console.log("ciao".length === 4) //true

let ut1 = "salvatore"
let ut2 = "lidia"
// ut1 === ut2
ut1 !== ut2 //controlla se u1 e' diverso da ut2 => vero

let lidia = {nome: "Lidia"}
let lidiaClone = {nome: "Lidia"}
console.log(lidia === lidiaClone) //sempre uguali
//AND e OR
// && 
// || 

let final = (ut1 === u2) && (2 == "2")
//            false           true
//                     false

let final2 = (ut1 === ut2) || (2 == "2")
//              false           true
//                      true


const lidia = {
    nome: "Lidia",
    coloreOcchi: "marrone",
    isKovac: true,
    eta: 25
}

const simone = {
    nome: "Simone",
    coloreOcchi: "verdi",
    isKovac: true,
    eta: 17
}

const francesco = {
    nome: "Francesco",
    coloreOcchi: "azzurri",
    isKovac: false,
    eta: 27
}

const emma = {
    nome: "Emma",
    coloreOcchi: "azzurri",
    isKovac: false,
    eta: 14
}
// ESERCIZI

if (lidia.isKovac) { //se emma.isKovac e' true .... => lidia.isKovac === true
    console.log(lidia.nome, "ha il cognome Kovac") //si eseguo solo se emma.isKovac e' true
    //100 righe
}

if (!emma.isKovac) { //!false => true ~~ emma.isKovac === false 
    console.log("Emma NON ha il cognome Kovac")
}

// console.log("Fuori dalle graffe")
console.log(lidia.coloreOcchi === "marrone")

if (lidia.coloreOcchi === "marrone") {
    console.log("Lidia ha gli occhi di colore", lidia.coloreOcchi)
}


if (lidia.coloreOcchi !== "marrone") {
    console.log("Lidia NON ha gli occhi marroni")
}

//esegui qualcosa SOLO se il cngome NON e' kovac => isKovac === false
if (francesco.isKovac) {
    //???????????
}

if (!francesco.isKovac) {
    //qui codice
}

//in entrambi i casi 

if (francesco.isKovac) { //se .isKovac === true
    //cosa fare se e' kovac
    //dentro l'if
    console.log("l'utente e' un Kovac!")
} else {
    console.log("L'utente non e' un Kovac")
}
//fuori dall'if
console.log("io sono sempre qui!!!!")

/*!
if (uova) { //?se ci sono le uova...
    //!compra 12 uova 
} else if (albume) { //?altrimenti (se non ci sono le uova), se c'e' l'albume in barattolo
    //!compra un barattolo di albume 
}

if(zuccheroDiCanna) {
    //!compralo
} else if(dolcificante) {
    //!al posto dello zucchero di canna, compra il dolcificante
} else {
    //!compra lo zucchero normale
}

if(zuccheroDiCanna) {

} else {

}

//se li voglio comprare entrambi... 

if(over18 && maschio) {
    //fai qualcosa
} 

if(over18 || maschio) {
    //stessa cosa per entrambi
}
if(over18) {
    //cosa 1
}
if(maschio) {
    //cosa2
}
*/



//!ATTENZIONE: 
//else if => solo se le condizioni sono "uniche", e non c'e' possibilita' di sovrapposizione
if (lidia.nome === "emma") { //se il nome e' emma 
    //qualcosa 1
} else if (lidia.nome === 'francesco') { //se il nome NON e' emma, ma e' francesco
    //qualcosa 2
} else if (lidia.nome === 'simone') { //se il nome non e' francesco, non e' emma, ma e' simone
    //qualcosa 3
} else {
    //ultima possibilita'
}

if (lidia.coloreOcchi !== "azzurro") {
    //si esegue
}

if (francesco.coloreOcchi === "azzurro") {
    //si esegue
}

//!errore di logica: 
if (lidia.coloreOcchi !== "azzurro") {
    //si esegue
} else if (francesco.coloreOcchi === "azzurro") {
    //non si esegue...
}

if (giallo && rosso) {
    //qui giallo e rosso sono SEMPRE veri
    //ma marrone e verde potrebbero essere falsi
    if (marrone && verde) {
        //qui giallo, rosso, marrone e verde sono SEMPRE veri
    } else {

    }
} else {

}

//! non usatele come condizioni, perche' sono poco leggibili
let variabileNonVera = 0

if (variabileNonVera) {
    //non si esegue, perche' lo 0 e' considerato "falsy"
} else {
    //si esegue
}

if (variabileNonVera > 0) {
} else {
    //si esegue
}


let nomeDiPersona = ""
//scrivendo "nomeDiPersona" senza condizione, potremmo pensare che sia un booleano, ma non e' lo e'
//codice "illegibile"
if (nomeDiPersona) {
    //non si esegue perche' la stringa vuota e' "falsy"
    console.log("Non hai inserito un nome")
} else {
    //si esegue
}

//sarebbe piu' corretto... 
if (nomeDiPersona.length > 0) { //la stringa deve essere piu' lunga di 0 caratteri
    console.log("Non hai inserito un nome")
} else {
    //si esegue
}

//! operatore ternario

if (francesco.isKovac) {
    console.log("Ok")
} else {
    console.log("altro cognome")
}

//condizione ? codice : altroCodice
//: === else
(francesco.isKovac && emma.isKovac) ? console.log("ok") : console.log("altro cognome")
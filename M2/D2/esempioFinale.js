// let lidia = {
//   //proprieta'
//   nome: "Lidia",
//   cognome: "Kovac",
//   batch: "Fall20",
//   hasWebcam: true,
//   address: {
//     via: "casa mia",
//     civico: "22",
//     citofono: "Kovac",
//   },
// }
// let stefano = {
//   //proprieta'
//   nome: "Stefano",
//   cognome: "Il mio collega",
//   batch: "x",
//   hasWebcam: true,
//   address: {
//     via: "casa sua",
//     civico: "22",
//     citofono: "il suo cognome",
//   },
// }

// //stefano e lidia hanno la webcam accesa:
// let webcam = lidia.hasWebcam && stefano.hasWebcam
// //                  true       &&       true
// //                           true

// let riccardo = {
//   //proprieta'
//   nome: "Riccardo",
//   cognome: "Il mio collega",
//   batch: "x",
//   hasWebcam: false,
//   address: {
//     via: "casa sua",
//     civico: "22",
//     citofono: "il suo cognome",
//   },
// }
// //sia lidia che riccardo hanno la webcam aperta?
// let webcam2 = lidia.hasWebcam && riccardo.hasWebcam
// //                  true && false
// //                      false
// //lidia O riccardo hanno la webcam
// let webcam3 = lidia.hasWebcam || riccardo.hasWebcam
// //                  true || false
// //                      true

// //true && true => true
// //true && false => false
// //false && false => false

// const PI = 3.14 //non puo' essere cambiato


// //true || true => true
// const utente1 = {
//   id: 1,
//   name: "Leanne Graham",
//   username: "Bret",
//   email: "Sincere@april.biz",
//   address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//     geo: {
//       lat: "-37.3159",
//       lng: "81.1496",
//     },
//   },
//   phone: "1-770-736-8031 x56442",
//   website: "hildegard.org",
//   company: {
//     name: "Romaguera-Crona",
//     catchPhrase: "Multi-layered client-server neural-net",
//     bs: "harness real-time e-markets",
//   }
// }

// const utente2 = {
//   id: 2,
//   name: "Ervin Howell",
//   username: "Antonette",
//   email: "Shanna@melissa.tv",
//   address: {
//     street: "Victor Plains",
//     suite: "Suite 879",
//     city: "Wisokyburgh",
//     zipcode: "90566-7771",
//     geo: {
//       lat: "-43.9509",
//       lng: "-34.4618",
//     },
//   },
//   phone: "010-692-6593 x09125",
//   website: "anastasia.net",
//   company: {
//     name: "Deckow-Crist",
//     catchPhrase: "Proactive didactic contingency",
//     bs: "synergize scalable supply-chains",
//   }
// }


// //controllare se due persone lavorano nello stesso posto
// console.log(
//   (utente1.company.name === utente2.company.name) && (utente1.company.catchPhrase === utente2.company.catchPhrase) && (utente1.company.bs === utente2.company.bs)
// //        ("company1" === "company2")             &&            ("i'm lovving it" === "batte forte sempre")        &&     ("programatore" === "cassiere")
// //                  false                         &&                              false                             &&            false
// //  false && false && false 
// // (false && false) && false 
// //      false && false
// // false
// )

// //toLowerCase() => trasforma una stringa in minuscolo
// //toUpperCase() => trasforma una stringa in maiuscolo
// console.log(utente1.name.toLowerCase())//metodo delle stringhe


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

  //almeno una persona ha un'eta' dispari? 
  // (lidia.eta % 2 === 1) || (simone.eta % 2 === 1 ) || (emma.eta % 2 === 1) || (francesco.eta % 2 === 1) 

  // (lidia.eta % 2 !== 0) || (simone.eta % 2 !== 0) || (emma.eta % 2 !== 0) || (francesco.eta % 2 !== 0)
//   1 !== 0          ||     1 !== 0             ||     0 !== 0          ||     1 !==0
//     true                   true                        false                   true
//     true || true
//         true       ||     true               || false || true
//    true || true || false || true 
//    true || false || true
//    true || true 
//     true          

//simone, francesco E lidia abbiano tutti e tre il cognome "Kovac" => isKovac  === true
console.log(

  // (simone.isKovac === true) && (lidia.isKovac === true) && (francesco.isKovac === true)
  //      true   === true    &&       true === true      &&  false === true <<<<<<<<<<questa riga!!!!
  (simone.isKovac) && (lidia.isKovac) && (francesco.isKovac) //se il vvalore della proprieta' e' una BOOLEANA NON SERVE LA CONDIZIONE
  //       true      &&      true       &&       false
  // (true && true) && false
  //      true && false
  //          false
)


// c'e' almeno UNA persona nella lista che ha isKovac === false? 
console.log(
  simone.isKovac ||  lidia.isKovac || emma.isKovac || francesco.isKovac
//   true         || true           || false        || false
//   true || false || false 
//   true || false
//   true
)

//nome | occhi | isKovac
// emma  blue   ✨ // 😢


//SELECT * FROM cugini WHERE isKovac IS true 
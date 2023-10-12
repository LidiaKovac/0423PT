let lidia = {
    //proprieta'
    nome: "Lidia",
    cognome: "Kovac",
    batch: "Fall20",
    hasWebcam: true,
    address: {
        via: "casa mia",
        civico: "22",
        citofono: "Kovac",
    }
}
let stefano = {
    //proprieta'
    nome: "Stefano",
    cognome: "Il mio collega",
    batch: "x",
    hasWebcam: true,
    address: {
        via: "casa sua",
        civico: "22",
        citofono: "il suo cognome",
    }
}

//stefano e lidia hanno la webcam accesa: 
let webcam = lidia.hasWebcam && stefano.hasWebcam
//                  true       &&       true
//                           true

let riccardo = {
    //proprieta'
    nome: "Riccardo",
    cognome: "Il mio collega",
    batch: "x",
    hasWebcam: false,
    address: {
        via: "casa sua",
        civico: "22",
        citofono: "il suo cognome",
    }
}
//sia lidia che riccardo hanno la webcam aperta?
let webcam2 = lidia.hasWebcam && riccardo.hasWebcam
//                  true && false
//                      false 
//lidia O riccardo hanno la webcam
let webcam3 = lidia.hasWebcam || riccardo.hasWebcam
//                  true || false
//                      true

//true && true => true 
//true && false => false 
//false && false => false 

//true || true => true 
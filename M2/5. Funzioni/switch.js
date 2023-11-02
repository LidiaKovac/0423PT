const user = {
    name: "lidia",
    annoDiNascita: 2006,
}

if (user.annoDiNascita < 2005) {
    console.log("L'utente e' maggiorenne")
} else {
    console.log("L'utente e' minorenne")
}

if (user.annoDiNascita < 2007) {
    console.log("Puo' avere il foglio rosa in america")
} else if (user.annoDiNascita < 2005) {
    console.log("L'utente puo' comprare un'arma in america")
} else if (user.annoDiNascita < 2001) {
    console.log("L'utente puo' acquistare alcool in america")
}

if (user.annoDiNascita === 2007 && user.name === "simone") {
    console.log("bannato dalla patente")
}

switch (user.annoDiNascita) {
    case 2007:
        console.log("16 anni")
        break
    case 2001:
        console.log("22 anni")
        break
    case 2005:
        console.log("18 anni")
        break
}

const admin = {
    nome: "lidia",
    role: "admin",
}

const utente = {
    nome: "pippo",
    role: "student",
}

switch (admin.role) { //quale variabile controllare
    case "admin": //se il valore e' === admin
        console.log("l'utente e' un admin")
        break
    case "student":
        console.log("l'utente e' uno studente")
        break
}

if (admin.role === "admin") {
    console.log("l'utente e' un admin")
} else if (admin.role === "student") {
    console.log("l'utente e' uno studente")
}

// for (let i = 0; i < utenti.length; i++) {
//     switch (utenti[i].annoDiNascita) {
//         //
//     }
// }


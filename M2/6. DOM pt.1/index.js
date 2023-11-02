console.log({ document })
//console.log({document: document})
//querySelector
//querySelectorAll
// const h1 = document.querySelector("h1") //prende un solo elemento in base a un selettore CSS
const listaDiLi = document.querySelectorAll("ol li") //[li,li,li] prende tutti gli elementi li dentro gli elementi ol
const bio = document.querySelector(".bio")
console.log({ listaDiLi })
/* 
const listaDiLi = [
    {
        tagName: "li",
        innerText: "dog sitter"
    }, 
    {
        tagName: "li",
        innerText: "bagnino"
    },
    {
        tagName: "li",
        innerText: "fidanzato di barbie"
    }
]


*/
//tutti gli elementi con classe sinistra => .sinistra
//tutti gli elementi con classe scatola E classe sinistra => .sinistra.scatola
//tutti gli elementi con classe scatole E tutti gli elementi con classe sinistra, .sinistra, .scatola
// .sinistra,.scatola
// const sinistra = document.querySelectorAll(".scatola.sinistra")

//cambia il testo di tutti gli li in maiuscolo
//tutti gli li
const highlight = function () {
    const tuttiGliLi = document.querySelectorAll("li") //[li,li,li]

    for (let i = 0; i < tuttiGliLi.length; i++) {
        //.innerText <<< su elemento singolo
        const singoloLi = tuttiGliLi[i]
        singoloLi.innerText = singoloLi.innerText.toUpperCase()
        // if(singoloLi.innerText.toLowerCase().includes("a")) {
        singoloLi.classList.toggle("selezionato")
        // }
        //Elemento.classList.add("nomeDellaClasse")
        // singoloLi.classList.remove("selezionato")
        //String.toUpperCase()
    }
}

// const h1 = document.querySelector("h1")
// h1.classList.add("classeProva")

console.log("innerHTML: ", document.querySelector("div").innerHTML)
console.log("innerText: ", document.querySelector("div").innerText)

// console.log("innerText: ", document.querySelector("div:nth-of-type(3)").innerText)
// console.log("innerText: ", document.querySelectorAll("div")[2].innerText)

//cliccando su un li, evidenziali in giallo

const coloriRandom = function () {
    const lis = document.querySelectorAll("li")
    for (let i = 0; i < lis.length; i++) {
        //rgb(0,0,0), rgb(255,255,255)
        lis[i].style = `background-color: rgb(
        ${Math.round(Math.random() * 255)},
        ${Math.round(Math.random() * 255)},
        ${Math.round(Math.random() * 255)} )`
    }
}

const applicaColore = function (colore) {
    const lis = document.querySelectorAll("li")
    for (let i = 0; i < lis.length; i++) {
        //rgb(0,0,0), rgb(255,255,255)
        lis[i].style.border = colore
    }
}



applicaColore("purple")


//aggiungi all'h1 una classe CSS chiamata "pippo", che lo allinei al centro
//selezionare => modificare
const h1 = document.querySelector("h1")
h1.classList.add("pippo")


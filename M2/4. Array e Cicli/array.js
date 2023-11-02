let alfabeto = ["a", "b", "c", "d", "e"]
//               0    1    2    3    4
//task: stampare a schermo la lettera "a"
console.log(alfabeto[0]) //
//task: stampare a schermo la lettera "c"
console.log(alfabeto[2])
//!indice => parte da 0
let arrVuoto = [] //array vuoto
let nomi = [
    "andrea",
    "andrea r",
    "andrea s",
    "angelo",
    "carlo",
    "catalin",
    "damiano",
] //?
//             0           1           2          3        4         5          6        7
//!.length => inizia a contare da 1!!!
console.log("------ULTIMO EL------")
console.log(nomi)
console.log(alfabeto.length) //quantita' di elementi nell'array => 5
console.log(nomi.length) //7
//stampare sempre l'ultimo elemento dell'array
console.log(nomi[5]) //catalin
console.log(nomi[6]) // damiano
// console.log(nomi[-1]) // undefined
console.log(nomi[nomi.length]) // nomi[7] => undefined
console.log(nomi[nomi.length - 1]) // damiano
//                   7 - 1
//          nomi[6]
console.log(nomi.length - 1) // 6
// console.log(nomi[nomi.length--]) // undefined
"ciao".length //4
console.log("---CAMBIARE EL---")
console.log(nomi) //["andrea", "andrea r"]
let suffisso = " x"
nomi[0] += suffisso //aggiunge x in fondo
nomi[1] = "andrea raneri" //SOSTITUISCE la strina con "altro andrea"
nomi[nomi.length - 1] += " pavon"
console.log(nomi) // ["andrea x", "andrea raneri"]

let matrix = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l", "m"],
]
//accedi a "a" =>
//nomeArray[]
console.log(matrix[0][0])
//            [a,b,c][0]
//                a

//accedi a "e"
console.log(matrix[1][1])
//            [d,e,f][1]
//                e
//accedi a "g"
console.log(matrix[2][0])
//accedi a "c"
console.log(matrix[0][2])
//accedi a "i"
console.log(matrix[2][2])
//l'ultimo elemento, dell'ultimo array
console.log(matrix[matrix.length - 1][matrix.length - 1])
//          matrix[3 - 1][3 - 1] => postulato che la matrice e' quadrata
const ultimaRiga = matrix[matrix.length - 1]
const lunghezzaUltimaRiga = ultimaRiga.length
console.log(
    ultimaRiga[lunghezzaUltimaRiga - 1]
    //ultimaRiga[lunghezzaDell'ultima riga - 1]

    //           [j, k, l, m][j,k,l,m].length - 1
    //           [jklm][4-1] => [jklm][3] => m
)

const cugini = [
    {
        nome: "Lidia",
        coloreOcchi: "marrone",
        isKovac: true,
        eta: 25,
    },
    {
        nome: "Simone",
        coloreOcchi: "verdi",
        isKovac: true,
        eta: 17,
    },
    {
        nome: "Francesco", //cugini[2].nome
        coloreOcchi: "azzurri", //cugini[cugini.length - 2].coloreOcchi
        isKovac: false,
        eta: 27,
    },
    {
        nome: "Emma",
        coloreOcchi: "azzurri", //console.log(cugini[3].coloreOcchi)
        isKovac: false,
        eta: 14,
    },
]
console.log(cugini[0].nome)
//ultimo cugino
cugini[cugini.length - 1]
/* 
{
        nome: "Emma",
        coloreOcchi: "azzurri", //console.log(cugini[3].coloreOcchi)
        isKovac: false,
        eta: 14,
}

*/
cugini[cugini.length - 2].coloreOcchi //azzurri (francesco)

cugini[cugini.length - 1].eta

//!ERRORI COMUNI:
cugini.nome //QUALE CUGINO????
cugini.nome[1] //QUALE CUGINO??? + nome non e' un array

const personaggi = {
    data: [
        {
            name: "Aaron Bass", //personaggi.data[0].name
            img: "https://supernatural-quotes-api.cyclic.app/assets/350px-Aaron_Bass.png",
            actor: ["Adam Rose"],
            episodes: [
                {
                    title: "8.13 Everybody Hates Hitler",
                    id: "5441xkfs0li0res0t", //personaggi.data[0].episodes[0].id
                },
                {
                    title: "12.05 The One You've Been Waiting For",
                    id: "5441xkfs0li0rfcyr",
                },
            ],
            occupation: ["Judah Initiative"], //personaggi.data[0].occupation[0]
            id: "5441xkkfwlhdv3rk5",
            location: "Berlin, Germany",
        },
        {
            name: "Aaron Birch",
            img: "https://supernatural-quotes-api.cyclic.app/assets/350px-AaronBirch.jpg",
            actor: ["Adom Osei"],
            episodes: [
                {
                    title: "6.03 The Third Man",
                    id: "5441xkfs0li0ree5k",
                },
            ],
            occupation: [""],
            id: "5441xkkfwlhdv3s2h",
            location: "Easter, Pennsylvania",
        },
        {
            name: "Abaddon",
            img: "https://supernatural-quotes-api.cyclic.app/assets/350px-Abaddon001.png",
            actor: [
            "Alaina Huffman", 
            "Sharon Bell", 
            "Anna Galvin", //personaggi.data[2].actor[2]
            "Marilyn Norry"],
            episodes: [
                {
                    title: "8.12 As Time Goes By",
                    id: "5441xkfs0li0rersj",
                },
                {
                    title: "8.22 Clip Show",
                    id: "5441xkfs0li0reuof",
                },
                {
                    title: "8.23 Sacrifice",
                    id: "5441xkfs0li0reuxc",
                },
                {
                    title: "9.02 Devil May Care",
                    id: "5441xkfs0li0revf0",
                },
                {
                    title: "9.06 Heaven Can't Wait",
                    id: "5441xkfs0li0rewe8",
                },
                {
                    title: "9.10 Road Trip",
                    id: "5441xkfs0li0rexb5",
                },
                {
                    title: "9.11 First Born",
                    id: "5441xkfs0li0rexjx",
                },
                {
                    title: "9.17 Mother's Little Helper",
                    id: "5441xkfs0li0reyy3",
                },
                {
                    title: "9.21 King of the Damned",
                    id: "5441xkfs0li0rf02j",
                },
            ],
            occupation: ["Demon", "Knight of Hell"],
            id: "5441xkkfwlhdv3t32",
            location: "",
        },
        {
            name: "Abner",
            img: "https://supernatural-quotes-api.cyclic.app/assets/350px-Abner.png",
            actor: ["Dan Payne"],
            episodes: [
                {
                    title: "9.10 Road Trip",
                    id: "5441xkfs0li0rexb5",
                },
            ],
            occupation: ["Customer support", "Angel"],
            id: "5441xkkfwlhdv3u0n",
            location: "Sommerset, Pennsylvania",
        },
        {
            name: "Abraham Peterson",
            img: "https://supernatural-quotes-api.cyclic.app/assets/350px-AbrahamPeterson.png",
            actor: ["William MacDonald"],
            episodes: [
                {
                    title: "12.04 American Nightmare",
                    id: "5441xkfs0li0rfcqj",
                },
            ],
            occupation: [""],
            id: "5441xkkfwlhdv3utr",
            location: "Mason City, Iowa",
        },
        {
            name: "Abraxas",
            img: "https://supernatural-quotes-api.cyclic.app/assets/350px-Abraxas.png",
            actor: ["Nelson Leis"],
            episodes: [
                {
                    title: "14.11 Damaged Goods",
                    id: "5441xkfs0li0rfpys",
                },
            ],
            occupation: ["Demon"],
            id: "5441xkkfwlhdv3vog",
            location: "Grand Rapids, Minnesota",
        },
        {
            name: "Adam and Eve",
            img: "https://supernatural-quotes-api.cyclic.app/assets/350px-Adam-FirstMan.png",
            actor: ["Alessandro Juliani"],
            episodes: [
                {
                    title: "15.17 Unity",
                    id: "5441xkfs0li0rfygk",
                },
            ],
            occupation: ["First Humans"],
            id: "5441xkkfwlhdv3wim",
            location: "Santa Fe, New Mexico (Adam)",
        },
        {
            name: "Adam Milligan",
            img: "https://supernatural-quotes-api.cyclic.app/assets/350px-Adam.jpg",
            actor: ["Jake Abel"],
            episodes: [
                {
                    title: "4.19 Jump the Shark",
                    id: "5441xkfs0li0re6jx",
                },
                {
                    title: "5.18 Point of No Return",
                    id: "5441xkfs0li0rec0g",
                },
                {
                    title: "5.22 Swan Song",
                    id: "5441xkfs0li0redav",
                },
                {
                    title: "15.08 Our Father, Who Aren't in Heaven",
                    id: "5441xkfs0li0rfu57",
                },
                {
                    title: "15.19 Inherit the Earth",
                    id: "5441xkfs0li0rfzt2",
                },
            ],
            occupation: [
                "Student of the University of Wisconsin (formerly)",
                "Vessel",
            ],
            id: "5441xkkfwlhdv3x13",
            location: "Earth",
        },
        {
            name: "Adina",
            img: "https://supernatural-quotes-api.cyclic.app/assets/350px-Adina.png",
            actor: ["Jud Tylor"],
            episodes: [
                {
                    title: "10.01 Black",
                    id: "5441xkfs0li0rf6f7",
                },
                {
                    title: "10.03 Soul Survivor",
                    id: "5441xkfs0li0rf14j",
                },
            ],
            occupation: ["Angel"],
            id: "5441xkkfwlhdv3xyw",
            location: "",
        },
        {
            name: "Adolf Hitler",
            img: "https://supernatural-quotes-api.cyclic.app/assets/350px-AdolfHitler.png",
            actor: ["Gil Darnell"],
            episodes: [
                {
                    title: "12.05 The One You've Been Waiting For",
                    id: "5441xkfs0li0rfcyr",
                },
            ],
            occupation: ["Führer (formerly)"],
            id: "5441xkkfwlhdv3ysz",
            location: "Columbus, Ohio",
        },
    ],
    next: "https://supernatural-quotes-api.cyclic.app/characters?page=2",
    prev: null,
    count: 1105,
    resultCount: 10,
}

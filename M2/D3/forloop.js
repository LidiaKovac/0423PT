//?stampare a schermo i numeri da 1 a 100
// una variabile che definisce il valore iniziale del loop
//una condizione che mantiene il loop => il loop continua finche' (i < 100) === true
let ciao = "ciaociao"


for (let i = 0; i < 100; i++) {
    // l'inizio ; la fine ; la direzione
    // let unAltroCiao = "altroCiao"
    //qui ciao esiste
    //qui i esiste
    //qui unAltroCiao esiste
    // console.log(i) //0-99
    //stampo solo i numeri pari
    if (i % 2 === 0) {
        console.log(i)
    } else {
        continue //non fare niente, vai alla prossima iterazione
    }
    console.log("altro clg del loop")
}

for (let i = 1; i <= 100; i++) {
    // l'inizio ; la fine ; la direzione
    // let unAltroCiao = "altroCiao"
    //qui ciao esiste
    //qui i esiste
    //qui unAltroCiao esiste
    console.log(i) //1-100
}
for (let i = 0; i < 100; i++) {
    // l'inizio ; la fine ; la direzione
    // let unAltroCiao = "altroCiao"
    //qui ciao esiste
    //qui i esiste
    //qui unAltroCiao esiste
    console.log("Valore effetivo di i", i)
    console.log("Valore a schermo di i+1", i + 1) //!1-100
}
//qui i non esiste
//qui unAltroCiao non esiste

for (let i = 0; i < ciao.length; i++) {
    //ciao.length === 8
    console.log(ciao) //ciao ciao ciao ciao ciao ciao ciao ciao
    console.log(i) //0 1 2 3 4 5 6 7
}

for (let i = 0; i < 10; i++) {
    //console.log("ciao")
    //a.creazione i === 0 , true => console.log("ciao"), 0++ => 1 => primo "giro del loop"
    //b. i === 1, true => console.log("ciao"), 1++ => 2
    //c. i === 2, true => console.log("ciao"), 2++ => 3
    //d. i === 3, true => console.log("ciao"), 3++ => 4
    //........
    //x. i === 8, true => console.log("ciao"), 8++ => 9
    //y. i === 9, true => console.log("ciao"), 9++ => 10 
    //z. i === 10, false => FINE
    console.log(i)
}


//scrivere un loop che stampi da 100 a 0
for(let i = 100; i >= 0; i--) {
    //a. i === 100, true, 99
    console.log(i)
}
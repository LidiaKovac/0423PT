//tutti gli input hanno una proprieta' .value


const mostraValue = function() {
    const inputs = document.querySelectorAll("input")
    // .value
    for(let i = 0; i < inputs.length; i++) {
        console.log(inputs[i].value)
    }
}

const mostraTesto = function() {
    //evento onchange => si esegue quando cambia il valore => quando esco dall'input
    //evento onkeyup => si esegue ogni volta che rilascio un pulsante

    const inputTesto = document.querySelector(".inputTesto")
    console.log(inputTesto.value)
}

const coloraH1 = function(colore) {
    const h1 = document.querySelector("h1")
    h1.style.color = colore
}

const mostraColore = function() {
    const inputColore = document.querySelector(".inputColore")
    console.log(inputColore.value)
    coloraH1(inputColore.value)
}


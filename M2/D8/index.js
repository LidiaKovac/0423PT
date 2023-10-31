//tutti gli input hanno una proprieta' .value


const mostraValue = function () {
    const inputs = document.querySelectorAll("input")
    // .value
    for (let i = 0; i < inputs.length; i++) {
        console.log(inputs[i].value)
    }
}

const mostraTesto = function (keyupEvent) {
    //evento onchange => si esegue quando cambia il valore => quando esco dall'input
    //evento onkeyup => si esegue ogni volta che rilascio un pulsante
    const inputTesto = document.querySelector(".inputTesto")
    console.log(inputTesto.value)
}

const coloraH1 = function (colore) {
    const h1 = document.querySelector("h1")
    h1.style.color = colore
}

const mostraColore = function () {
    const inputColore = document.querySelector(".inputColore")
    console.log(inputColore.value)
    coloraH1(inputColore.value)
}

const mostraTarget = function (changeEvent) {
    console.log(changeEvent.target.value)
}

coloraH1("red")

const button = document.querySelector("button")
// button.onclick = mostraTarget
//<button onclick='mostraTarget()'> </button> 
button.addEventListener("click", mostraTarget)

// const input = document.querySelector("input")
// input.onchange = mostraTarget
// input.addEventListener("change", mostraTarget)

const inputs = document.querySelectorAll("input")

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("change", mostraTarget)
}
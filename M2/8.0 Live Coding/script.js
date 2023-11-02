/* 
! event.target.value


*/

const getInnerTextFromButton = function (clickEvent) {
    //TODO: clickEvent.target.value
    const digit = clickEvent.target.innerText
    //TODO: select input + inserire value
    const input = document.querySelector("#calculator__display")
    input.value += digit
}

const numbersButton = document.querySelectorAll(".calculator__key:not(.key--equal)")
//TODO: for
//*salvatore
for (let i = 0; i < numbersButton.length; i++) {
    //inizio, fine, direzione
    const numberButton = numbersButton[i]
    //*eugenio p
    numberButton.onclick = getInnerTextFromButton
}

//TODO: attaccare una funzione al pulsante uguale 


const calculateResult = function () {
    //*silvia
    //TODO: valore di calculator display 
    const input = document.querySelector("#calculator__display")
    const displayContent = input.value
    console.log(displayContent)
    //TODO: analizzarlo e decidere qualche operazione fare
    //*francesco
    //if
    //.includes()
    if(displayContent.includes("+")) { //+
        //vogliamo fare una somma
        //23+6
        //paperi,o e mi,ie
        const numeri = displayContent.split("+")//23,6
        console.log(Number(numeri[0]) + Number(numeri[1]))
        //.valueAsNumber => input type number

    }
}

//*damiano
const button = document.querySelector(".key--equal")
// button.onclick = calculateResult
button.addEventListener("click", calculateResult)


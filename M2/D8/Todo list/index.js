//Compito: crea una todo list
// - input type text a inizio pagina
// - ogni volta che premo invio, il contenuto dell'input
//    finisce in un li


//procedimento / ingredienti 
//? - .value dell'input
//! - .innerHTML 
//! - onchange //onkeyup => modalita' avanzata

const input = document.querySelector("input#task")
const getTaskValue = function () {
    return input.value
}

// const keyUp = function(keyUpEvent) {
//     if(keyUpEvent.key === "Enter") {

//     }
// }

const addTask = function() {
    const ul = document.querySelector("ul.task__wrap")
    ul.innerHTML += `<li> ${getTaskValue()} </li>`
    input.value = ""
}


input.onchange = addTask
// input.addEventListener("change", addTask)


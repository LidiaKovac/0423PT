const query = {
    users: [],
    teamNumber: 0
}

const getValueFromInput = function (changeEvent) {
    const inputValue = changeEvent.target.value
    addUser(inputValue)
}

const getNumberValue = function (changeEvent) {
    console.log(changeEvent.target.value) //stringa
    console.log(changeEvent.target.valueAsNumber) //number
    generateTeams(changeEvent.target.valueAsNumber)
}

// const pippo = {
//     nome: "giada",
//     eta: 34
// }
// pippo.nome = "pippo"

const addUser = function (name) {
    //name??
    query.users.push(name)
    const ul = document.querySelector("#users")
    ul.innerHTML += "<li>" + name + "</li>"
    // ul.innerHTML += `<li> ${name} </li>`
}

const generateTeams = function (teamNumber) {
    //div con classe "team" dentro l'elemento con classe container
    const container = document.querySelector(".container")
    let currentStudent = 0
    for (let i = 0; i < teamNumber; i++) {
        //2, 8
        //teamNumber, query.users.length
        if (teamNumber > query.users.length) {
            alert("troppi team zio")
            return
        }
        const amountPerTeam = Math.floor(query.users.length / teamNumber) //4
        const team = []
        for (let y = 0; y <= amountPerTeam - 1; y++) {
            //quinto, sesto, settimo, l'ottavo
            team.push(query.users[currentStudent])
            currentStudent++
        }
        // currentStudent += amountPerTeam
        container.innerHTML += `
        <div class='team'> Team number: ${i + 1} <br/> 
            ${team.join("<br/>")}
        </div>`
    }
}




//! onchange => #nuovoUtente
// ? che tipo di dato ? OGGETTO
// - .value => stringa 
const newUserInput = document.querySelector("#nuovoUtente")
newUserInput.onchange = getValueFromInput
const teamNumberInput = document.querySelector("#numeroDiTeam")
teamNumberInput.addEventListener("change", getNumberValue)
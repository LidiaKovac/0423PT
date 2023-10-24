const clienti = [
    {
        name: "Marco",
        lastName: "Rossi",
        isAmbassador: true,
        cart: [34, 56, 122],
    },
    {
        name: "Paul",
        lastName: "Flynn",
        isAmbassador: false,
        cart: [56, 78, 2223],
    },
    {
        name: "Amy",
        lastName: "Reed",
        isAmbassador: false,
        cart: [12, 2, 9],
    },
]

for (let i = 0; i < clienti.length; i++) {
    let carrelloIndividuale = 0
    for (let y = 0; y < clienti[i].cart.length; y++) {
        carrelloIndividuale += clienti[i].cart[y]
    }
    if (clienti[i].isAmbassador) {
        carrelloIndividuale *= 0.7
    }
    if (carrelloIndividuale < 100) {
        carrelloIndividuale += 50
    }
    console.log(`Il carrello di ${clienti[i].name} e' di ${carrelloIndividuale}`)
}

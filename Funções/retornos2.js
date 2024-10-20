
let userName = getFirstName("Matheus-Henrique-de-Lira-Ferreira", "-")
console.log("Seja bem vindo " + userName)
userName = getFirstName("Matheus Henrique de Lira Ferreira", " ")

console.log("Seja bem vindo " + userName)


function getFirstName(name, splitChar){

    let fisrtname = name.split (splitChar)[0]
    return fisrtname
}
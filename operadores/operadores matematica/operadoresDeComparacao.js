let numero = "1"
console.log(numero === 1)

let marca = "Apple"
let resultado = marca !== "samsung"
console.log(resultado)

// guarda o valor de uma variavel de resultado TRUE?FALSE

let cpfbloqueado = "123.445.222-45"
let cpfUsuario = "222.345.876-43"
let ehCPFBloqueado = cpfUsuario === cpfbloqueado

console.log("O Usuário pode embarcar ? " + ehCPFBloqueado)

// cpf permitido

let CPFPermitido = "222.345.876-43"
let CPFDoUsuario = "123.445.222-45"

let ehbloqueado = CPFDoUsuario === CPFPermitido

console.log("é um usuário invalido ? " + ehbloqueado)
// OR (||) - nosso boneco só pode sair se tiver sam chuva ou com Guarda chuva
let tempo = "sol"
let item = "Guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "Guarda chuva")

console.log("Nosso personagem pode sair ? "  + podeSair)
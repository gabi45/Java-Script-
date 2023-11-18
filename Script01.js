//trabalhar com variáveis,console.log

//Utilizando padrão camelcase

//variável (let,var,const) -> identificador ->dados 

const Carro = "Carro"
const fabricanteCarro= "renault"
const modelocarro = "sandero"
const corcarro = "vermelha"
const anoCarro = 2010
//primweira forma: concatenação

// saida de dados 
// carro: "carro"
// fabricantecarro: "renault"
// modelocarro: "sandero"
//corcarro: "cor"
//anocarro: anocarro

console ("carro"+ Carro + "fabricante" + fabricante)  
fabricantecarro + ", modelo do carro:" + modelocarro +", cor do carro:" + corcarro + ", ano:" + anoCarro;
console.log ("carro");
console.log ("fabricante do carro");
console.log ("modelocarro");
console.log ("corcarro")
console.log ("anoCarro");

// Segunda forma:Interpolação
console.log  (`Meu carro ${Carro}, fabricante  do carro: ${fabricanteCarro},  modelo carro: ${modelocarro}, COR DO CARRO: ${corcarro}, ano do carro: ${anoCarro}`);



// Atividade 01

let pi = 3.14
let raio = 16
let total = pi * raio * raio 
console.log(`o valor é: ${total}`);
//simples
let saudacao1 = "Olá";
let text = ("Qual seu nome?");
console.log(saudacao1 + ", " + text + "!");

//Usando Arrays
    // join: junta todos os elementos.
    // concat: mescla dois ou mais.
function cumprimentar(nome){
    let saudacao = "Olá"
    return[saudacao, nome].join(', ').concat("!")
}
console.log(cumprimentar("Bia"));

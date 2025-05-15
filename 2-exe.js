//Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.

function ConverterIdade(idadeAnos){
    const diasDoAno = 365;
    return idadeAnos * diasDoAno;
}
console.log(ConverterIdade(27))

//Sendo arrow function:
const converterIdadeEmDias = (idadeAnos2) =>{
    return idadeAnos2 * 365;
}
console.log(converterIdadeEmDias(30))
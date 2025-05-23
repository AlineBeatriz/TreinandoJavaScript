// Nível intermediários
// 1º Receba 3 notas e calcule a média do aluno.
function mediaDeAlunos(nota1, nota2, nota3){
    const calculo = (nota1 + nota2 + nota3) / 3;
    return calculo.toFixed();
}
console.log(mediaDeAlunos(7,8,10));

// 2º Dado um valor de salário, aplique 10% de aumento e exiba o novo valor.
function AumentoSalario(valorSalario){
    return valorSalario + (valorSalario * 0.10);
}
console.log(AumentoSalario(1200));

// 3º Verifique se um número é maior que 10.
function verificarNumero(numero){
    return (numero > 10) ? "Maior" : "Menor";
}
console.log(verificarNumero(8))

// 4º Receba dois números e diga qual é o maior.
const verificarMaior = (numero1, numero2) => {
    return (numero1 > numero2) ? `${numero1} é maior` : `${numero2} é maior`;
}
console.log(verificarMaior(150,20));

// 5º Calcule o IMC (peso ÷ altura²) e classifique o resultado.
const calculoDeIMC = (peso, altura) => {
    let calculo = peso / (altura * altura);
    return "Seu IMC é: " + calculo.toFixed(2); 
    //toFixed(2) serve para retornar apenas 2 casas decimas (00.00) arredonda o valor
}
console.log(calculoDeIMC(61,1.69));

// 6º Calcule o valor de um produto com 30% de desconto.
const descontao = (valorProduto) => {
    const desconto = valorProduto * 0.30;
    return valorProduto - desconto;
}
console.log("Valor com desconto: " + "R$" + descontao(50.00).toFixed(2));

// 7º Verifique se um número é múltiplo de 5.
const multiploDeCinco = (numero) => {
    return (numero  % 5 === 0) ? "Múltiplo de 5" : "Não múltiplo de 5";
}
console.log(multiploDeCinco(17));

// 8º Calcule quantos dias úteis você trabalha por mês.
const diasUteisDeTrabalho = (diasUteis) => {
    const semanasDoMes = 4;
    return diasUteis * semanasDoMes;
}
console.log("Dias úteis trabalhado por mêS: " + diasUteisDeTrabalho(5));

// 9º Dado o valor de um produto e a quantidade, calcule o total da compra.
const totalDaCompra = (valorProduto, quantidade) => {
    return valorProduto * quantidade;
}
console.log("Sua compra deu: " + "R$" + totalDaCompra(30,2).toFixed(2));

// 10º Crie uma função que retorna "positivo", "negativo" ou "zero" com base no número.
function retornoPositivoOuNegativo(numero){
    if(numero > 0){
        console.log("Positivo");
    }else if(numero < 0){
        console.log("Negativo");
    }else{
        console.log("Zero");
    }
}
retornoPositivoOuNegativo(0)
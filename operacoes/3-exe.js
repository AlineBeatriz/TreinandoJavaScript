//1. Receba um valor em reais e converta para dólares (use um valor fixo da cotação).
const converterRealEmDolar = (valor) => {
    //1 dolar = 5,62 Real brasileiro
    const dolar = 5.62;
    const resultado = valor / dolar; 
    console.log("Dolar: $" + resultado.toFixed(2));
}
converterRealEmDolar(10);

//2. Crie um simulador de cálculo de INSS com base em faixas de salário.
function simuladorINSS(salario){
    if(salario <= 1518.00){
        const resultado = salario * 0.07;
        console.log("Seu INSS é: R$" + resultado.toFixed(2));
    }else if(salario <= 2793.88){
        const resultado = salario * 0.09;
        console.log("Seu INSS é: R$" + resultado.toFixed(2));
    }else if(salario <= 4190.83){
        const resultado = salario * 0.12;
        console.log("Seu INSS é: R$" + resultado.toFixed(2));
    }else {
        const resultado = salario * 0.14;
        console.log("Seu INSS é: R$" + resultado.toFixed(2));
    }
}
simuladorINSS(1900.50);
/*Comentario sobre o exercício:
neste exercício aprendi a importancia 'do menor <= para o Maior =>' e usei o 'toFixed(2)' para mostra duas casas decimais */

//3. Simule um caixa eletrônico: dado um valor, informe quantas notas de 100, 50, 10 e 1 serão entregues.
function caixaEletronico(valor) {
    let notas100 = Math.floor(valor / 100);
    valor = valor % 100;

    let notas50 = Math.floor(valor / 50);
    valor = valor % 50;

    let notas10 = Math.floor(valor / 10);
    valor = valor % 10;

    let notas1 = Math.floor(valor / 1);

    console.log("Notas de 100: " + notas100);
    console.log("Notas de 50: " + notas50);
    console.log("Notas de 10: " + notas10);
    console.log("Notas de 1: " + notas1);
}caixaEletronico(280);
    /*Comentario sobre o exercício:
    neste exercício usamos o Math.floor para retorna o valor inteiro sem o resto %. */

// Faça um cronômetro que conte de 1 a 10 no console, com setTimeout.
for (let i = 1; i <= 10; i++) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  }
    /*Comentario sobre o exercício:
    neste exercício usamor a opção de loop o 'for' usado repetir a contagem com acrescimo e usei 'setTimeout' para da uma pausa de 1 seg na resposta do console para cada número */

//Crie uma calculadora que recebe dois valores e um operador (+, -, *, /).
function calculadora(valor1,operador, valor2){
    if(operador === "+"){
        resultado = valor1 + valor2;
        
    }else if(operador === "-"){
        resultado = valor1 - valor2;
        
    }else if(operador === "*"){
        resultado = valor1 * valor2;
        
    }else if(operador === "/"){
        resultado = valor1 / valor2;

    }else{
        return "Operador inválido!"
    }
    return resultado;
}console.log(calculadora(20, "*", 20))
    /*Comentario sobre o exercício:
    neste exercício é importante atribuir os parametros e usar o 'if e else' para fazer a verificação */
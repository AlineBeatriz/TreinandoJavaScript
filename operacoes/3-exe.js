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

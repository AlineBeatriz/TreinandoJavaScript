function calcularSalario(horasTrabalhadasMes, salarioPorHora){
    const salarioBruto = horasTrabalhadasMes * salarioPorHora;
    const salarioLiquido = salarioBruto - salarioBruto * 30/100
    return "Salário igual a R$ " + salarioLiquido
}
console.log(calcularSalario(160, 12))

function calculadoraAvancada(valor1, operador, valor2){
    if (!isNaN(valor1) && !isNaN(valor2)) {
        console.log("Ambos são números");
      }
    
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
}console.log(calculadoraAvancada(20, "+", 2011));

// 6. Receba a idade de uma pessoa e informe em qual faixa ela está: criança, jovem, adulto, idoso.
function faixaEtaria(idade){
    if(idade >= 0 && idade  <= 12){
        return("Você é uma criança!")
    }else if(idade >= 13 && idade <= 17){
        return("Você é um Jovem!")
    }else if(idade >= 18 && idade <= 64){
        return("Você é um adulto!")
    }else if(idade >= 65){
        return("Você é um idoso!")
    }else{
        return("Idade errada, tente novamente!")
    }
}
console.log(faixaEtaria(28));
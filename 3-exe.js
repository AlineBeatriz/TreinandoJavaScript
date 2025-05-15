function calcularSalario(horasTrabalhadasMes, salarioPorHora){
    const salarioBruto = horasTrabalhadasMes * salarioPorHora;
    const salarioLiquido = salarioBruto - salarioBruto * 30/100
    return "Salário igual a R$ " + salarioLiquido
}
console.log(calcularSalario(160, 12))
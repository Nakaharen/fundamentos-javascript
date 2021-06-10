// function nomeDaFuncao(parametro1) {
//   // bloco de código
// }

// function queDiaEhoje() {
//   const data = new Date()

//   console.log(`Hoje é dia: ${data.getDate()}`)
// }

// queDiaEhoje()

// function soma(valor1, valor2) {
//   console.log(`A soma de ${valor1} + ${valor2} é`, valor1 + valor2)
// }
// soma(10, 20)
// soma(3,4)

// // - Funções podem retornar valores
// function soma(valor1, valor2) {
//   return valor1 + valor2
// }

// const idade = 20
// const tamanho = 10
// const resultado = soma(idade, tamanho)
// console.log('resultado', resultado)

// function multiplicar(valor1, valor2){
//   const resultado = valor1 * valor2
//   return resultado
// }

// console.log(`O resultado da multiplicação é:`, multiplicar(10,30))

///

const funcionario1 = {
  nome: 'Zezinho',
  desconto: 0.2,
  salarioBruto: 2000,
  salarioLiquido: 0
}

const funcionario2 = {
  nome: 'Mizinha',
  desconto: 0.3,
  salarioBruto: 5000,
  salarioLiquido: 0
}

// const descontoFuncionario1 = funcionario1.salarioBruto - (funcionario1.desconto * funcionario1.salarioBruto)
// const descontoFuncionario2 = funcionario2.salarioBruto - (funcionario2.desconto * funcionario2.salarioBruto)

// console.log(
//   `
//   Funcionario1: ${descontoFuncionario1}
//   Funcionario2: ${descontoFuncionario2}
//   `
// )

function calcularSalarioLiquido(salarioBruto, desconto) {
  const salarioLiquido = salarioBruto - (desconto * salarioBruto)
  return salarioLiquido
}

const salarioLiquidoFuncionario1 = calcularSalarioLiquido(funcionario1.salarioBruto, funcionario1.desconto)
const salarioLiquidoFuncionario2 = calcularSalarioLiquido(funcionario2.salarioBruto, funcionario2.desconto)

console.log(
  `
  Funcionario1: ${salarioLiquidoFuncionario1}
  Funcionario2: ${salarioLiquidoFuncionario2}
  `
)
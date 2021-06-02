const podeDirigir = true
if(podeDirigir) {
  console.log('Ela pode dirigir')
}

// ! nega o valor
const saldoEmConta = 0
if (!saldoEmConta) {
  console.log('não tem saldo!')
}

// !! força o valor a true ou false
console.log('boolComString', !!boolComString)

// negação + forçar a bool
// duas exclamações converte pro tipo bool
// uma exclamação inverte o valor
!(!!boolComString)

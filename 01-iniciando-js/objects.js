//

const heroi = {
  nome: 'Sailor Moon',
  idade: 17,
  sexo: 'Feminino'
}

// console.log('nome',heroi.nome)
// console.log('idade',heroi['idade'])
// console.log('sexo', heroi.sexo)
// console.log('naoExiste', heroi.naoExiste)
// heroi.id = 0001
// console.log(heroi)

//saber chaves
// console.log(Object.keys(heroi))

// saber valores
// console.log(Object.values(heroi))

// juntar dois objetos
const pessoa = {
  força: 100
}

/* por padrão se evita alterar o valor de um objeto já criado,
usar o assing */
const novoObj = Object.assign(heroi, pessoa)

// deletar objeto
delete novoObj.idade
console.log(novoObj)


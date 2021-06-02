const minhaLista = []
const minhaListaDeTarefas = [
  'mandar email',
  'colocar feno para o coelho',
  'limpar casinha do coelho'
]

//console.log(minhaListaDeTarefas[0])

// quantidade de itens no array - começa pelo 1
// console.log(minhaListaDeTarefas.length)

// adicionar item - push
// minhaListaDeTarefas.push('arrumar o quarto')
// console.log(minhaListaDeTarefas);

// remover ultimo da lista - pop
// const ultimo = minhaListaDeTarefas.pop()
// console.log(ultimo, minhaListaDeTarefas)

// remover o primeiro da lista - shift
// const primeiro = minhaListaDeTarefas.shift()
// console.log(minhaListaDeTarefas);

// remover um item especifico a partir de um índice - splice
// console.log(minhaListaDeTarefas[2])
// qual item de inicio
// quantos remover
// minhaListaDeTarefas.splice(2, 1)
// console.log(minhaListaDeTarefas);

const itens = [
  1, 'computador', 0.19
]

// verificar o tipo do array
// console.log(typeof(itens))

// verificar se é array da forma correta
// console.log(Array.isArray(itens))

// ordenar
// const numeros = [3,1,2,0]
// console.log(numeros.sort())

// juntar dois arrays
// const novo = itens.concat(1,2,3)
// console.log(novo)

// juntar dois arrays em uma só string - join
// console.log(itens.join(','))

// verificar índice do item
// quando não encontra o item, retorna -1
const index = itens.indexOf('computador')
console.log(itens[index])
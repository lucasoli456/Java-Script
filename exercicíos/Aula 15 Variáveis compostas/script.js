let num = [5, 8, 2, 9, 3,]
num.sort() // Atributo utilizado para organizar o vetor em ordem crescente
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
num.sort()
console.log(num)
console.log(`Agora o primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(10)
if (pos == -1){
    console.log(`O valor não foi encontrado`) // Por padrão quando não existe o valor buscado no vetor, o JS retorna o valor -1 que significa que o valor buscado não existe.
}else {
    console.log(`O valor está na posição ${pos}`)
}


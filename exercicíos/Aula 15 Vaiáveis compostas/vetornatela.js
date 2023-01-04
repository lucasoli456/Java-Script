let valores = [8, 7, 6, 2, 9, 4]
console.log(valores)
valores.sort()

/* 
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

for(let pos=0; pos < valores.length; pos++){ // Essa é a forma mais tradicional que mostra o percurso dos vetores
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for (let pos in valores ){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

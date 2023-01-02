var contador = 1 // Estrura de repetição com teste no inicio (Mais utilizada)
while (contador <= 5) {
    console.log(`Olá, tudo bem? ${contador}`)
    contador++ // É a mesma coisa que ---> contador = contador + 1 ou ---> contador += 1
} 

var cont = 1 // Estrutura de repetição com teste no final
do {
    console.log(`Estou bem. Obrigado! ${cont}`)
    cont++
} while(cont <= 5)
 

for (var teste = 1 ; teste <= 5 ; teste ++){ // Estrutura de repetição com variavel de controle
    console.log(`Passo ${teste}`)
}


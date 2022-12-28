var idade = 64
console.log (`Você tem ${idade} anos.`)
if (idade < 16){
    console.log(`Você não ainda não pode votar`)
} else if (idade <18 || idade > 64){
    console.log(`O voto é opcional`)
}else {
    console.log(`O voto para você é obrigatório`)
}
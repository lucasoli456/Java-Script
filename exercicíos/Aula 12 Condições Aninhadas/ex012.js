var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são extamente ${hora} horas.`)

if (hora == 1 || hora < 6){
    console.log(`Tenha uma ótima madrugada`)
}

else if (hora < 12){
    console.log(`Tenha um bom dia!`)
} 

else if (hora < 18){
    console.log(`Tenha uma boa tarde!`)
} 

else if (hora <= 24){
    console.log(`Tenha uma boa noite!`)
}
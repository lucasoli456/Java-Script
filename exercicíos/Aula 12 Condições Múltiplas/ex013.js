var agora = new Date()
var diaSem = agora.getDay()
/*
    0 -> Domingo
    1 -> Segunda
    2 -> Terça
    3 -> Quarta
    4 -> Quinta
    5 -> Sexta
    6 -> Sábado

    TODO SWITCH DEVE SER USADO O BREAK APÓS O COMANDO É OBRIGATÓRIO

    ESTRUTURA SWITCH É ÚTIL PARA TESTAR VALORES PONTUAIS OU CARACTERES EX: 1,2,3,4  SE FOR PRECISO TESTAR VALORES EM INTERVALOS, EX: ENTRE 0 E 8, É RECOMENDADO UTILIZAR ESTRUTURA IF
*/
switch(diaSem){
    case 0:
        console.log(`Domingo`)
        break
    case 1:
        console.log(`Segunda`)
        break
    case 2:
        console.log(`Terça`)
        break   
    case 3:
        console.log(`Quarta`)
        break
    case 4:
        console.log(`Quinta`)
        break
    case 5:
        console.log(`Sexta`)
        break
    case 6:
        console.log(`Sábado`)
        break 
    default:
        console.log(`[ERRO: DIA DA SEMANA INVÁLIDO]`)                           
}

function contar(){
    let ini = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let intervalo = document.getElementById('txtinter')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || intervalo.value.length == 0){
        res.innerHTML = 'Impossível contar! Faltam dados'
    } else {
        res.innerHTML = 'Contando: <br>'
        let nini = Number(ini.value)
        let nfim = Number(fim.value)
        let nintervalo = Number(intervalo.value)
        
        if (nintervalo <= 0){
            window.alert('Intervalo inválido! Considerando INTERVALO 1 ')
            nintervalo = 1
        }
        if (nini < nfim){
            //Contagem crescente
           for(let cont = nini; cont <= nfim; cont += nintervalo) {
            res.innerHTML += ` ${cont} \u{1F449}`
           }
        } else {
            // Contagem regressiva
            for(let cont = nini; cont >= nfim; cont -= nintervalo) {
                res.innerHTML += ` ${cont} \u{1F449}`
        }
    }   res.innerHTML += `\u{1F3C1}`
    
}}
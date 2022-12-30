function verificar(){
    var data = new Date() // Serve para puxar o ano atual
    var ano = data.getFullYear()// Serve para puxar o ano atual
    var fano = document.getElementById('txtano') // Busca o que fo digitado no input pelo id
    var res = document.querySelector('div#res') // Busca o dado mas deve colocar a tag mais o id
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO!] *ANO INVÁLIDO* Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex [0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <13){
                //Criança
                img.setAttribute('src', 'foto-menino-criança.png')
            } else if( idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-homem-jovem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-homem-idoso.png')
            } 
        } else if (fsex[1].checked)
            genero = 'Mulher'
            if(idade >= 0 && idade <13){
                //Criança
            } else if( idade < 50){
                //Adulto
            } else {
                //Idoso
            } 
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
}
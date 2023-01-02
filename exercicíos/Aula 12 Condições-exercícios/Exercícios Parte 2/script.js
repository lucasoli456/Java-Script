function verificar(){
    var data = new Date() // Serve para puxar a data atual
    var ano = data.getFullYear()// Serve para puxar o ano atual
    var fano = document.getElementById('txtano') // Busca o que fo digitado no input pelo id
    var res = document.querySelector('div#res') // Busca o dado mas deve colocar a tag mais o id
    
    if (fano.value.length == 0 || Number(fano.value) > ano){ // Testa se a caixa ano foi inserido um valor inválido ou vazio
        window.alert('[ERRO!] *ANO INVÁLIDO* Verifique os dados e tente novamente!')
    } else {

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')



        // Testa se o checked foi marcado Masculino e mostra a imagem de acordo com a idade
        if (fsex [0].checked){
            genero = 'Homem'

            if(idade >= 0 && idade <13){
                //Criança
                img.setAttribute('src', 'foto-menino-criança.png')
            } else if( idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-homem-jovem.png')
            } else if (idade < 120) {
                //Idoso
                img.setAttribute('src', 'foto-homem-idoso.png')
            } else {
                // Morto
                img.setAttribute('src', 'dead.png')
            }

        
        // Testa se o checked foi marcado Feminino e mostra a imagem de acordo com a idade   
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            
            if(idade >= 0 && idade <13){
                //Criança
                img.setAttribute('src', 'foto-menina-criança.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-mulher-jovem.png')
            } else if (idade <120){
                //Idoso
                img.setAttribute('src', 'foto-mulher-idosa.png')
            } else {
                //Morto
                img.setAttribute('src', 'dead.png')
            }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}}
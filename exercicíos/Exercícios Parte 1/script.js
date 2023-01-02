function carregar(){
var msgtop = window.document.getElementById('msg')
var msgbottom = window.document.getElementById('msg2')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msgtop.innerHTML = `Agora são ${hora} horas.`


if (hora >= 0 && hora <= 5 ){
    img.src = 'imagens/fotomadrugada.png'
    msgbottom.innerHTML = `Tenha uma boa madrugada`
    document.body.style.background = '#081b1f'
}
else if (hora >= 6 && hora < 12) {
    img.src =  'imagens/fotodia.png'  
    msgbottom.innerHTML = `Tenha um bom dia!`
    document.body.style.background = '#e2cd9f'

} else if (hora >= 12 && hora <= 18) {
    img.src = 'imagens/fototarde.png'
    msgbottom.innerHTML = `Tenha uma boa tarde!`
    document.body.style.background = '#cf6028'

}else {
    img.src = 'imagens/fotonoite.png'
    msgbottom.innerHTML = `Tenha uma boa noite!`
    document.body.style.background = '#193853'
}

}
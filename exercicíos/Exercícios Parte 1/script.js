function carregar(){
var msgt = window.document.getElementById('msg')
var msgb = window.document.getElementById('msg2')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msgt.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) {
    img.src =  'imagens/fotodia.png'  
    msgb.innerHTML = `Tenha um bom dia!`
    document.body.style.background = '#e2cd9f'

} else if (hora >= 12 && hora <= 18) {
    img.src = 'imagens/fototarde.png'
    msgb.innerHTML = `Tenha uma boa tarde!`
    document.body.style.background = '#cf6028'

}else {
    img.src = 'imagens/fotonoite.png'
    msgb.innerHTML = `Tenha uma boa noite!`
    document.body.style.background = '#193853'
}

}
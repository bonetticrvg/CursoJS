function carregar(){
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerText = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        foto.src = 'fotomanha.png'
        document.body.style.backgroundColor = '#e8e3d9'
    } else if (hora >= 12 && hora < 18){
        foto.src = 'fototarde.png'
        document.body.style.backgroundColor = '#f17406'
    } else {
        foto.src = 'fotonoite.png'
        document.body.style.backgroundColor = '#2d3948'
    }
}
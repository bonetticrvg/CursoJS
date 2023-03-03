function verificar(){

var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.getElementById('res')
if (fano.value.length == 0 || fano.value > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente')
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        genero = 'Homem'
        if (idade < 18){
            img.setAttribute('src', 'bebe.png')
        } else if (idade >=18 && idade <65){
            img.setAttribute('src', 'homem-adulto.png')
        } else{
            img.setAttribute('src', 'idoso.png')
        }
    } else {
        genero = 'Mulher'
        if (idade < 18){
            img.setAttribute('src', 'bebe-menina.png')
        } else if (idade >=18 && idade <65){
            img.setAttribute('src', 'mulher-adulta.png')
        } else{
            img.setAttribute('src', 'idosa.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
}
}
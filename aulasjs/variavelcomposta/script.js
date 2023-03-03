var num = document.getElementById('ntxt')
var lista = document.getElementById('lista')
var res = document.getElementById('res')
var valores = []

function isNumero (n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } return false
}

function inLista (n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('O valor encontrado é invalido ou já se encontra na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0){
        window.alert('Adicione valores para finalizar')
    } else{
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for (var pos in valores){
            soma += valores[pos]
        if (valores[pos] > maior)
            maior = valores[pos]
        if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} elementos</p>`
        res.innerHTML += `<p>O menor valor é ${menor} e o maior é ${maior}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é igual a ${media}</p>`

    }
}
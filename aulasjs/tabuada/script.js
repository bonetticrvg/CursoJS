function calcular() {
    let ntxt = document.getElementById('ntxt')
    var tab = document.getElementById('seltab')
    if (ntxt.value.length == 0) {
        window.alert('Por favor, digite um número')    
    } else {
        let n = Number(ntxt.value)
        let c = 1
        tab.innerHTML = ''
        while (c < 11) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
            c++
    }
    }

    }

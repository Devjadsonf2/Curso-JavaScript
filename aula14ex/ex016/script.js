function contar() {
    var inicio = document.querySelector('#inum')
    var fim = document.querySelector('#fnum')
    var passo = document.querySelector('#pnum')
    var res = document.querySelector('#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
       var i = Number(inicio.value)
       var f = Number(fim.value)
       var p = Number(passo.value)

        if(p == 0) {
            alert('Caixa Passo não pode ser 0.')
            p = 1
        }
       if (i < f) {
        // Contagem crescente
        for (var c = i; c <= f; c += p) {
        res.innerHTML += `${c}  \u{1F449}`
       }
     } else {
        // Contagem decerscente
        for (var c = i; c >= f; c -= p)
        res.innerHTML += `${c}  \u{1F449}`
     }
       res.innerHTML += ` \u{1F3C1}`

    }
}
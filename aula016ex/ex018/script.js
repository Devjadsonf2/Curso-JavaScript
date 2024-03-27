let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
let valores = []

function isNumero(n) { // Validando isNumero
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) { // Validando inLista
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() { //Função principal
    if (isNumero(num.value) && !inLista(num.value, valores)) {
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `Valor ${num.value} adicionado.`
       lista.appendChild(item)
       res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' // Limpar input
    num.focus() // Focar cursor no input
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0] // Verificar o maior número
        let menor = valores[0] // Verificar o menor número
        let soma = 0
        let media = 0
        for (let pos in valores) { // Analisar maior e menor valor dentro da array
            soma += valores[pos] // Somar valores na array
            media = soma / tot // Média
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
       
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo,temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p> Somando todos os valores,temos ${soma}.</p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media}</p>`
    }
}
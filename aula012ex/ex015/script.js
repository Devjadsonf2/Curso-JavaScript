
function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')

   if (fano.value.lenght == 0 || fano.value > ano) {
    alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    //res.innerHTML = `Idade calculada: ${idade} anos.`
    var genero = ''
    var img = document.createElement('img')//Colocar imagem pelo javascript
    img.setAttribute( 'id', 'foto')//Atribuir id ao elemento criado 

    if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'bb-mas.png')
        } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'jovem-mas.png')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'adulto-mas.png')
        } else {
            //idoso
            img.setAttribute('src', 'idoso-mas.png')
        }
    } else {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'bb-fem.png')
        } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'jovem-fem.png')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'adulto-fem.png')
        } else {
            //idoso
            img.setAttribute('src', 'idoso-fem.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
    
   }
}
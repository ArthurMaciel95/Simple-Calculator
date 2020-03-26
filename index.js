

function verificar() {
    let num1 = document.querySelector('input#num1').value
    let num2 = document.querySelector('input#num2').value
    let res = document.querySelector('div#res')
    let soma = res
    soma = Number(num1) + Number(num2)


    if (num1 == null || num1 == '' && num2 == '' || num2 == null) {

        alert('PREENCHA OS 2 CAMPOS')
        return false
    } else if (num1 == null || num1 == '') {

        alert('PRENCHER CAMPO 1')
        return false

    } if (num2 == '' || num2 == null) {

        alert('PRENCHER CAMPO 2')
        return false
    }
        
    res.innerHTML = `${soma}`

}

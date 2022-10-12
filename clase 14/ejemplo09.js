
function validarLargo(texto,LargoRequerido){
    return texto.length >= LargoRequerido
}

function validarForm(){
    const nombreValido = true;
    const passwordValido = validarLargo(document.form1.text1.value,5);

    const resultado = nombreValido && passwordValido;

    if (resultado){
        alert ('Es Válido')
    } else{
        alert ('No Es válido')
    }

}
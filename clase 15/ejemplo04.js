function todoslosParrafos(){
    const allparrafos = document.getElementsByTagName("p");
    console.log (allparrafos)

    const num = allparrafos.length; 

    alert(`Hay ${num} elementos <p> dentro de este documento.`);
    // alert('la suma de los p es ' ´allparrafos.length);
}


function parrafosCaja1(){

    const caja1 = document.getElementById('caja1');
    const caja1parrafos = caja1.getElementsByTagName('p');

    // console.log(caja1);
    // console.log(caja1parrafos);

    const num = caja1parrafos.length;
    alert(`Hay ${num} elementos <p> dentro de este documento.`);


}

function parrafosCaja2(){
    const caja2parrafos = document.querySelectorAll('#caja2 p');
    console.log(caja2parrafos);

    const num = caja2parrafos.length;

    alert(`Hay ${num} elementos <p> dentro de este documento.`);




}

parrafosCaja2()
/*
IMPORTANTE:
SI SE PONE EL JS EN EL HEAD, SE EJECUTARÁ EL CÓDIGO ANTES DE LEER EL HTML
Y POR ELLO NO PODRÁ LEER LOS VALORES QUE SE INSERTEN EN LOS INPUT, DANDO 
ERROR DE null
*/
'use strict'

function calculo(valor1, valor2, fnSumar, fnRestar){
    fnSumar(valor1 + valor2);
    fnRestar(valor1 - valor2);
}

document.querySelector("#botonSumar").addEventListener('click', function(){
    var valor1 = parseInt(document.querySelector("#valor1").value);
    var valor2 = parseInt(document.querySelector("#valor2").value);

    calculo(valor1, valor2, suma =>{
        document.write("La suma es: ", suma, "<br>");
        alert("La suma es: " + suma);
    }, resta =>{
        document.write("La resta es: ", resta);
        alert("La resta es: " + resta);
    })
})
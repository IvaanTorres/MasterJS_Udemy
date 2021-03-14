'use strict'

//FUNCION DE DOCUMENT.WRITE
function escribir(texto){
    document.write(texto);
}

//CREACIÓN DEL ARRAY
var numeros = new Array();

//BUCLE PARA INSERTAR LOS VALORES EN EL ARRAY (BUCLE NORMAL)
for(let i = 0; i<6; i++){
    var pregunta = parseFloat(prompt("Escribe un número"));
    numeros.push(pregunta);
}

//BUCLE PARA MOSTRAR LOS VALORES DEL ARRAY (BUCLE FOR-EACH)
numeros.forEach((numero, index)=>{
    escribir("El número " + numero + " está en la posición del array " + index + "<br>");
    console.log("El número " + numero + " está en la posición del array " + index);
});

escribir("<br>");
//ORDENAR ALFABÉTICAMENTE
numeros.sort();
//numeros.sort(function(a, b){return a-b}); -----------> ORDENAR LOS VALORES NUMÉRICAMENTE (DE MANERA ASCENDENTE)
//numeros.sort(function(a, b){return b-a}); -----------> ORDENAR LOS VALORES NUMÉRICAMENTE (DE MANERA DESCENDENTE)

//BUCLE PARA MOSTRAR LOS VALORES DEL ARRAY (BUCLE FOR-IN)
for(let numero in numeros){
    escribir("El número " + numeros[numero] + " está en la posición del array " + numero + "<br>");
}

escribir("<br>");
//INVERTIR EL ORDEN DE LOS ELEMENTOS DEL ARRAY
numeros.reverse();

//BUCLE PARA MOSTRAR LOS VALORES DEL ARRAY (BUCLE NORMAL)
for(let i = 0; i<numeros.length; i++){
    escribir("El número " + numeros[i] + " está en la posición del array " + i + "<br>");
}

//MOSTRAR LA LONGITUD DEL ARRAY
escribir("<br> El Array tiene " + numeros.length + " elementos. <br>");

//BUSCAR UN ELEMENTO EN CONCRETO Y SU INDICE
var numeroBuscado = parseFloat(prompt("¿Qué número quieres buscar?"));
var busqueda = numeros.find(numero => numero == numeroBuscado);
var busquedaIndex = numeros.findIndex(numero => numero == numeroBuscado);

if(busqueda == numeroBuscado){
    escribir("El valor " + numeroBuscado + " SI ha sido encontrado <br>");
    escribir("Se encuentra en la posición: " + busquedaIndex);
}else{
    escribir("El valor " + numeroBuscado + " NO ha sido encontrado");
}
'use strict'
var numeros = new Array(6);

var escribePantalla = texto => document.write(texto + "<br>");
var escribeConsola = texto => console.log(texto);
var mostrarArray = (array, ordenar, reverse) => {
    if(ordenar == true){
        array.sort((a,b) => a-b);
    }
    if(reverse == true){
        array.reverse();
    }
    escribePantalla("Array " + " : " + array.toString());
    escribeConsola("Array " + " : " + array.toString());
};
var encontrarNumero = numero => {
    var elementoEncontrado = numeros.includes(numero);
    var indice = numeros.indexOf(numero);
    if(elementoEncontrado){
        escribePantalla(numero + " ha sido encontrado en el índice: " + indice);
    }else{
        escribePantalla("ERROR: " + numero + " NO ha sido encontrado.");
    }
};
var arraySize = array => {
    escribePantalla(Object.entries(array).length);
};


for(var i = 1; i<=numeros.length; i++){
    var numero = parseInt(prompt("Numero " + i + ": Escribe un número:"));
    if(isNaN(numero)){
        i--;
        alert("ERROR: Valor no numérico.");
        continue;
    }
    numeros[i-1] = numero;
}
mostrarArray(numeros, false, false);
mostrarArray(numeros, true, false);
mostrarArray(numeros, true, true);

escribePantalla("Numero de elementos del Array: "); arraySize(numeros);

var numeroBuscado = parseInt(prompt("Introduce el numero a buscar:"));
encontrarNumero(numeroBuscado);
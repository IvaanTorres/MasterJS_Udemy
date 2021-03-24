'use strict'

var array1 = new Array(1, 2, 3, 4, 5);
var array2 = new Array(5, 6, 7, 8, 9);

//PRIMER MÉTODO PARA DEFINIR UNA MATRIZ
var matriz = new Array(array1, array2);

console.log(matriz);
console.log("<br>");
console.log(matriz[0][3]); //output = 4

//RECORRIDO DE UNA MATRIZ EN UN FOR NORMAL
for(var fila = 0; fila<matriz.length; fila++){
    document.write("Los valores son: ");
    for(var valor = 0; valor<matriz[0].length; valor++){
        document.write(matriz[fila][valor] + " - ");
    }
    document.write("<br>");
}

//SEGUNDO METODO PARA DEFINIR UNA MATRIZ
var matriz2 = new Array(new Array(0, 1, 2, 3, 4, 5), new Array(6, 7, 8, 9, 10), new Array(11, 12, 13, 14, 15));
document.write(matriz2.toString());
console.log(matriz2);
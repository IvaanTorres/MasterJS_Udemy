'use strict'

/** FUNCION PARA ESCIBIR */
function escribir(foo){
    document.write(foo);
}

/** FUNCION BinarySearch */
function binarySearch (Array, elemento){
    var encontrado = false;
    for(var i = 0; i<Array.length; i++){
        if(Array[i] == elemento){
            encontrado = true;
            break;
        }
    }
    if(encontrado){
        escribir("El nombre ha sido encontrado <br> Se ha encontrado en la posición: "+ i);
    }else{
        escribir("El nombre NO ha sido encontrado");
    }
    escribir("<br>");
}

var nombres = new Array("Ivan", "Pablo", "Jeremi", "Lara", "Monica");
var nombres2 = new Array();

nombres.sort();

nombres.forEach((nombre, index) => {
    escribir(index + " - " + nombre + "<br>");
});

var preguntaNombre = prompt("Escribe un nombre para buscar en el Array");

binarySearch(nombres, preguntaNombre); //HACER LA BUSQUEDA

nombres2 = nombres.slice(0, 4);

escribir(nombres2);

escribir(nombres.indexOf("Ivan"));
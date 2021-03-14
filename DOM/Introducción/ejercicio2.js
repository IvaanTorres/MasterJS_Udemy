'use strict'
var escribir = texto => document.write(texto);

var caja = document.querySelector("#caja");

escribir(caja + "<br>");

caja.innerHTML = "holaaa";

caja.style.background = "red";
caja.style.padding = "10px";
caja.style.border = "solid 1px black";
caja.style.borderRadius = "20px";

var divs = document.getElementsByTagName("div");
console.log(divs);

for(var valor in divs){ // Bucle de los valores del array Divs
    if(divs[valor].textContent != undefined){ // Se verifica que sea un elemento valido o no sea Undefined
        var parrafo = document.createElement("p"); // Se crea un elemento P
        var valorTexto = document.createTextNode(divs[valor].textContent); // Se crea un valor de texto con el contenido de cada elemento del array
        parrafo.appendChild(valorTexto); // Se le añade el nodo de texto al elemento P
        document.querySelector("section").appendChild(parrafo); // Se añade/Append el elemento P al tag Section
        // escribir(divs[valor].textContent + "<br>");
    }
}
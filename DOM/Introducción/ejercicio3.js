'use strict'
var escribir = texto => document.write(texto);

var caja = document.querySelector("#caja");

escribir(caja + "<br>");

caja.innerHTML = "holaaa";

caja.style.background = "red";
caja.style.padding = "10px";
caja.style.border = "solid 1px black";
caja.style.borderRadius = "20px";

var spans1 = document.getElementsByClassName("texto1");
var spans2 = document.getElementsByClassName("texto2");

console.log(spans2);

for(var valor in spans2){
    if(spans2[valor].textContent != undefined){
        var span = spans2[valor];
        var parrafo = document.createElement("p");
        var textoValor = document.createTextNode("Texto número: " + (parseInt(valor)+1));
        parrafo.appendChild(textoValor);
        span.appendChild(parrafo); // ! CREO UN PARRAFO EN CADA SPAN CON CLASE texto2
        spans2[0].style.color = "red"; //Cambiar el color de la letra del primer span
        
        var hijosSpan2 = span.children; // ! SE CREA UN ARRAY CON LOS HIJOS DE UNA ETIQUETA // HTMLColections
        var hijosSpan2_opcion2 = document.querySelectorAll(".texto2 > p"); // ! NodeList
        console.log(hijosSpan2);
        console.log(hijosSpan2_opcion2);

        if(valor == 1){ //Si es el 2o SPAN con clase texto2...
            hijosSpan2[0].style.background = "red"; //Eliges su 1er hijo y se añade fondo rojo.
        }

    }
}
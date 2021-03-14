'use strict'
var escribir = texto => document.write(texto);

// var caja = document.getElementById("caja"); // ! OPCION 1
var caja = document.querySelector("#caja"); // ! OPCION 2

escribir(caja);

caja2.innerHTML = "holaaa";

caja.style.background = "red";
caja.style.padding = "10px";
caja.style.border = "solid 1px black";
caja.style.borderRadius = "20px";
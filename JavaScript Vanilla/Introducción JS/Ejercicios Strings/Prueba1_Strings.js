'use strict'

var texto = "  Hola a todos";
var texto2 = "como estais?  ";

document.write(texto.concat(texto2) + "<br>"); //CONCATENA TEXTOS
document.write(texto.trim() + "<br>"); //QUITA ESPACIOS DEL PRINCIPIO Y FINAL DEL STRING
document.write(texto.indexOf('t') + "<br>"); //DICE LA POSICION DEL CARACTER
document.write(texto.charAt(5) + "<br>"); //DICE EL CARACTER SEGÚN SU POSICION INDICADA
document.write(texto.replace('todos', 'Ivan') + "<br>"); //REMPLAZA SUBSTRINGS EN EL STRING
document.write(texto.slice(3, 12) + "<br>"); //RECORTA EL STRING EN UNA PARTE
var array = texto.split(" "); //CREA UN ARRAY CON CADA PALABRA EN UNA POSICION DIFERENTE
var array2 = texto.split(""); //CREA UN ARRAY CON CADA LETRA EN UNA POSICION DIFERENTE
var array3 = texto.split(); //CREA UN ARRAY CON TODO EL STRING EN UNA MISMA POSICION
console.log(array);
console.log(array2);
console.log(array3);
document.write(texto.includes("todos") + "<br>"); //INDICA SI ES VERDAD O NO QUE UN SUBSTRING ESTÁ EN EL STRING
document.write(texto.toUpperCase()); //CAMBIA EL STRING A MAYÚSCULAS
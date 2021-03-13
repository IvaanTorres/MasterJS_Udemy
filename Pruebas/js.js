'use strict'

var escribir = texto => document.write(texto);
var tipoDeDatos = dato => typeof(dato);
var mostrarArray = nomArray => {
    if(Object.entries(nomArray).length === 0){
        escribir("EL ARRAY ESTÁ VACIO");
    }else{
        nomArray.forEach((elemento,indice) => {
            if(elemento != undefined){
                escribir(elemento + " con indice: " + indice + "<br>");
            }
        });
    }
};

/**
 * ! PRUEBA 1
var pregunta1 = parseInt(prompt("Escribe un numero"));
var pregunta2 = parseInt(prompt("Escribe otro numero"));

if(isNaN(pregunta1) || isNaN(pregunta2) || pregunta1 < 1 || pregunta2 < 1){
    escribir("ERROR");
}else{
    var suma = pregunta1 + pregunta2;
    escribir(suma);
}
 */

/**
 * ! PRUEBA 2
var texto = "Hola mundo,soy Iván";
var arraypalabras = texto.split(" ");
var salida = `
    <ul>
        <li><h4>${arraypalabras}</h4></li>
    </ul>
`;
escribir(salida);
 */

/**
 * ! PRUEBA 3
var texto = "Hola jaja saludos como estais";
var indiceSaludos = texto.indexOf("saludos");
var palabraSaludos = texto.slice(indiceSaludos);
escribir(palabraSaludos + "<br>");
escribir(texto.includes("como"));
 */

/** 
 * ! PRUEBA 4
do{
    var tablaDeMultiplicar = parseInt(prompt("Escribe que tabla de multiplicar deseas calcular: (MAX = 50)"));
    var numeroMultiplicacion = parseInt(prompt("Hasta cuanto deseas multiplicarlo? (MIN = 10)"));

    if(isNaN(numeroMultiplicacion) || isNaN(tablaDeMultiplicar)){
        alert("ERROR: UN DATO NO ES NUMERICO");
        continue;
    }
    if(tablaDeMultiplicar > 50 || numeroMultiplicacion < 10){
        alert("ERROR: UN DATO NO COINCIDE CON LOS LIMITES");
        continue;
    }

    for(var i = 1; i<=numeroMultiplicacion; i++){
        var resultado = tablaDeMultiplicar*i;
        escribir(tablaDeMultiplicar + "x" + i + "= " + resultado + "<br>");
    }

}while(isNaN(numeroMultiplicacion) || isNaN(tablaDeMultiplicar) || tablaDeMultiplicar > 50 || numeroMultiplicacion < 10);
*/

/**
 * ! PRUEBA 5
var paises = new Array();

do{
    var pais = prompt("Escribe un pais:");
    var almacenar = confirm("Deseas almacenarlo???");
    if(almacenar == true){
        paises.push(pais);
    }
}while(pais != "ACABAR");
paises.pop();
mostrarArray(paises);
 */


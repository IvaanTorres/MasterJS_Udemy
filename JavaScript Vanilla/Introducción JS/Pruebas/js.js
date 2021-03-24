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
 * ! PRUEBA 1 | HACER UNA SUMA
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
 * ! PRUEBA 2 | STRING TOKENIZER Y REALIZAR UNA SALIDA CON ACENTOS
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
 * ! PRUEBA 3 | SLICE EN UN STRING Y VER SI INCLUYE UNA PALABRA
var texto = "Hola jaja saludos como estais";
var indiceSaludos = texto.indexOf("saludos");
var palabraSaludos = texto.slice(indiceSaludos);
escribir(palabraSaludos + "<br>");
escribir(texto.includes("como"));
 */

/** 
 * ! PRUEBA 4 | TABLAS DE MULTIPLICAR
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
 * ! PRUEBA 5 | ARRAY, ALMACENAR Y ELIMINAR ELEMENTOS Y MOSTRAR EL ARRAY
var paises = new Array();

do{
    var pais = prompt("Escribe un pais:");
    var almacenar = confirm("Deseas almacenarlo???");
    if(almacenar == true){
        paises.push(pais);
    }
}while(pais != "ACABAR");
paises.pop();
mostrarArray(paises); // ! OPCION 1
escribir(nombres.toString()); // ! OPCION 2
 */

/**
 * ! PRUEBA 6 | COMPROBAR QUE EXISTE UN ELEMENTO EN EL ARRAY
var nombres = new Array();
nombres.push("Juan");
nombres.push("IvaJunn");
nombres.push("Pablo");
nombres.push("Sofia");
var encontrado = nombres.find(nombre => nombre == "Ivagyn"); // ! OPCION 1
var encontrado = nombres.find( // ! OPCION 2
    function (nombre){
        return nombre == "Ivgyan";
    }
);
var encontrado = nombres.includes("Juan"); // ! OPCION 3

if(encontrado){
    escribir("Se ha encontrado el nombre Ivan dentro del array Nombres");
}else{
    escribir("Nombre Ivan NO ENCONTRADO");
}
*/
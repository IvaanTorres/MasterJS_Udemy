'use strict'

//DECLARACION DE ARRAYS
var array1 = ["hola", "adios", "que tal"];
var array2 = new Array ("Hola", "adios", "que tal");

//VISUALIZACIÓN DE DATOS EN STRING DE LOS ARRAYS
console.log(array1.toString());
console.log(array2.toString());

//ADICION DE NUEVOS DATOS EN LOS ARRAYS
array1.push("Holaaaaa");
console.log(array2.toString());

//SACAR DATOS DEL ARRAY USANDO EL BUCLE FOR
for(var i = 0; i<array2.length; i++){
    console.log("Palabra en la posición " + i + " es " + array2[i]);
}

//SACAR DATOS DEL ARRAY USANDO EL BUCLE FOR-EACH
array2.forEach((elemento, index) => {
    console.log("Palabra en la posición " + index + " es " + elemento.toUpperCase());
});

//SACAR DATOS DEL ARRAY USANDO EL BUCLE FOR-EACH DE FORMA NORMAL
array1.forEach((function(elemento){
    console.log("Hola, como estas?" + elemento);
}));
'use strict'
var numero1 = prompt("Escribe un número", 0);
var numero2 = prompt("Escribe un último número", 0);

function calculo (numero1, numero2, sumar, restar){
    let suma = numero1+numero2;
    let resta = numero1-numero2;

    sumar(suma); 
    restar(resta);
    //LAS FUNCIONES CALLBACK SE AUTONOMBRAN DENTRO DE LA FUNCION, ES DECIR, SE HAN AÑADIDO COMO 
    //VALOR Y ADEMÁS SE HAN DEBIDO NOMBRAR EN EL PROCESO. (ej: sumar Y restar).
    
}

calculo(Number(numero1), Number(numero2), totalSuma =>{
        console.log("El numero es: ", totalSuma);
        document.write("El numero es: ", totalSuma, "<br>");
    }, totalResta =>{
        console.log("El otro numero es: ", totalResta);
        document.write("El otro numero es: ", totalResta);
    }
);
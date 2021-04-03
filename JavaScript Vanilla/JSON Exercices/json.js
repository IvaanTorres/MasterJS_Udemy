'use strict'

window.addEventListener('load', () => {
    var personas = [];
    function preguntar(){
        do{
            var nombre = prompt("Como te llamas?");
            var anyos = parseInt(prompt("Cuantos anyos tienes?"));
            var vocacion = prompt("A que te dedicas?");

            var persona = crearPersona(nombre, anyos, vocacion);
            personas.push(persona);
        }while(nombre != "ACABAR");
        personas.pop();
        mostrarInfo();

    }
    function crearPersona(nombre, anyos, vocacion){
        var nuevaPersona = {
            nombre: nombre,
            edad: anyos,
            vocacion: vocacion
        };

        return nuevaPersona;
    }

    function mostrarInfo(){
        var articulo = document.querySelector(".content");
        for(let index in personas){
            var persona = personas[index];
            var parrafo = document.createElement("p");
            parrafo.append("Nombre: " + persona.nombre + ", edad: " + persona.edad + ", vocacion: " + persona.vocacion);
            articulo.appendChild(parrafo);
        }
    }

    preguntar();
});
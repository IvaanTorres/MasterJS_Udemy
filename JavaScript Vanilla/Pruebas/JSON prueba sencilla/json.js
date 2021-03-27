'use strict'

window.addEventListener('load', () => {
    var div = document.querySelector(".texto");
    div.innerHTML = "";

    var personas = {
        "people":[
        {"name":"Ivan", "surname":"Torres"},
        {"name":"Pablo", "surname":"Lorenzo"},
        {"name":"Jere", "surname":"Peña"},
        {"name":"Clem", "surname":"Dorveaux"},
        ]
    }

    var coches = '{ "cars" : [' +
            '{"brand":"Opel", "name":"Zafira"},'+
            '{"brand":"Seat", "name":"Leon"},'+
            '{"brand":"Mercedes", "name":"AMG"},'+
            '{"brand":"Renault", "name":"Clio"}]}';

    personas.people[0].name = "Manueh";
    
    function crearH2(contenedor, texto){
        var titulo1 = document.createElement("h2");
        var h2content = document.createTextNode(texto).textContent;
        titulo1.append(h2content);
        contenedor.append(titulo1);
    }

    crearH2(div, "Nombres de 'personas'");
    personas.people.forEach((element, index, array) => {
        var br = document.createElement("br");
        div.append(element.name + " - " + array[index].surname);
        div.appendChild(br);
    });

    crearH2(div, "Marcas de 'coches'");
    var cochesJSON = JSON.parse(coches); //! Transforma String en JSON

    //! Se accede al JSON, es decir, "cars"
    cochesJSON.cars.forEach((element, index, array) => {
        var br = document.createElement("br");
        div.append(element.brand + " - " + array[index].name);
        div.appendChild(br);
    });
});
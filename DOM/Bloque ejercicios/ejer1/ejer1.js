'use strict'

window.addEventListener('load', () => {
    
    var data = document.querySelector(".caja");
    data.style.display = "none";
    var form = document.querySelector("#form");
    var showData = document.querySelector("#showData");
    var submit = document.querySelector("#submit");

    // showData.addEventListener('click', () => {

    //     var name = document.querySelector("#name").value;
    //     var surname = document.querySelector("#surname").value;
    //     var age = document.querySelector("#age").value;
    
    //     var data = document.querySelector("#data");

    //     data.innerHTML="";

    //     data.append("Nombre: " + name);
    //     breakline();
    //     data.append("Apellidos: " + surname);
    //     breakline();
    //     data.append("Edad: " + age);
    // });

    form.addEventListener('submit', () => {
        var name = document.querySelector("#name").value;
        var surname = document.querySelector("#surname").value;
        var age = document.querySelector("#age").value;

        data.style.display = "block";
        
        var info = [name, surname, age];

        for (const dato in info) {
            var parrafo = document.createElement("p");
            parrafo.append(info[dato]);
            data.append(parrafo);
        }
    });
});
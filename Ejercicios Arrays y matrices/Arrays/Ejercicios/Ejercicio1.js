'use strict'

var equipos = new Array();
for(var equipo = 0; equipo < 7; equipo++){

    equipos[equipo] = prompt("Escribe un equipo de futbol");
}
equipos.forEach((equipo, index) => {
    document.write("El equipo numero " + (index+1) + " es el " + equipo + "<br>");
});
document.write("<br>");

equipos[1] = equipos[1].toLowerCase();
equipos[3] = equipos[3].toLowerCase();

equipos.forEach((equipo, index) => {
    document.write("El equipo numero " + (index+1) + " es el " + equipo + "<br>");
});

var numAleatorio = Math.random()*100;
document.write(numAleatorio.toFixed(2));
document.write("<br>");
document.write(numAleatorio); //NUM ALETORIO DE 0 A 99
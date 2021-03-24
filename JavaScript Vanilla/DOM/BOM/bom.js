'use strict'

var escribir = texto => document.write(texto + "<br>");

escribir(verAltoVentana());
escribir(verAnchoVentana());
escribir(verAltoyAnchoPantalla());

console.log(verObjectLocation());
escribir(verURL_Actual());

function verAnchoVentana(){
    return window.innerWidth + " : Ancho de la ventana.";
}
function verAltoVentana(){
    return window.innerHeight + " : Alto de la ventana.";
}
function verAltoyAnchoPantalla(){
    return screen.height + " : Alto de la pantalla <br>"
    + screen.width + " : Ancho de la pantalla.";
}

/* ------------- */
function verObjectLocation(){
    return window.location;
}
function verURL_Actual(){
    return window.location.href;
}
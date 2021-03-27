'use strict'

// https://www.uv.es/mplac/LaNau/4_Javascript/Ejercicios.htm

window.addEventListener('load', () => {
    var wrapper = document.querySelector(".wrapper");

    var iteracionFecha = setInterval(() => {
        var fecha = new Date();
        wrapper.innerHTML = fecha.toLocaleString('es-ES', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    }, 1000);
});
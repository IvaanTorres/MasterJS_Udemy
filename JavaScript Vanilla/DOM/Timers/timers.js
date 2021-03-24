'use strict'

window.addEventListener('load', () => {
    var contador1 = 0;
    var contador2 = 0;
    
    function intervalo(){
        var timer = setInterval(() => {
            var titulo = document.querySelector(".titulo");
            if(titulo.style.fontSize != "50px"){
                titulo.style.fontSize = "50px";
            }else{
                titulo.style.fontSize = "20px";
            }
            if(contador1 == 5){
                clearInterval(timer);
            }
            contador1++;
        }, 1000);

        return timer;
    }

    var tiempo1 = intervalo();

    var timer2 = setTimeout(() => {
        var subtitulo = document.querySelector(".subtitulo");
        subtitulo.style.background = "red";
        if(contador2 == 7){
            intervalo();
        }
        contador2++;
    }, 2000);
});
'use strict'

// Evento LOAD para que funcione todo una vez cargada la WEB
window.addEventListener('load', () => {
    var titulo = document.querySelector("#titulo");
    var subtitulo = document.querySelector("#subtitulo");

    var bgTitulo = document.querySelector("#bgTitulo");
    var sizeSubtitulo = document.querySelector("#sizeSubtitulo");

    var input = document.querySelector("#texto");
    var exit = document.querySelector("#exit");
    exit.innerHTML = "";

    function cambiarFondoTitulo(){
        bgTitulo.addEventListener('click', () => {
            let bgColor = titulo.style.background;
            if(bgColor == "red"){
                titulo.style.background = "green";
            }else{
                titulo.style.background = "red";
            }
            
        });
    }

    function changeSizeSubtitle(){
        subtitulo.style.background = "grey";
        subtitulo.addEventListener('mouseover', () => {
            subtitulo.style.fontSize = "40px";
        })
        subtitulo.addEventListener('mouseout', () => {
            subtitulo.style.fontSize = "25px";
        });
        sizeSubtitulo.addEventListener('dblclick', () => {
            subtitulo.style.fontSize = "40px";
        });
    }

    function focusInput(){
        input.addEventListener('focus', () => {
            input.style.background = "purple";
        });
        input.addEventListener('blur', () => {
            input.style.background = "red";
        });
    }

    function breakLine(){
        var breakLine = document.createElement("br");
        exit.append(breakLine);
        return "";
    }

    function keyPressed(){
        input.addEventListener('keydown', (letter) => {
            exit.append("Estoy escribiendo la letra: " + String.fromCharCode(letter.keyCode));
            breakLine();
        });
        input.addEventListener('keypress', (letter) => {
            letter = String.fromCharCode(letter.keyCode);
            if(letter == "@"){
                alert("NO SE PUEDE USAR @");
                alert(input.value);
            }
            exit.append("Estoy pulsando la letra: " + letter);
            breakLine();
            input.value = input.value.replace("@", "");
        });
    }

    function keyup(){
        input.addEventListener('keyup', (letter) => {
            letter = String.fromCharCode(letter.keyCode);
            var red = Math.random()*255;
            var green = Math.random()*255;
            var blue = Math.random()*255;
            exit.append("Estoy levantando la letra: " + letter);
            breakLine();
            exit.style.background = "rgb("+red+","+green+","+blue+")";
        });
    }

    cambiarFondoTitulo();
    changeSizeSubtitle();
    focusInput();
    keyPressed();
    keyup();
});


'use script'

var escribir = texto => {
    document.write(texto);
}

function mostrarLista(numHijos, numSubHijos){
    escribir("<ul>");
    for(let i = 1; i<=numHijos; i++){
        var randomNum = Math.random()*1000;
        var parrafo = document.createElement("p");
        var textoParrafo = document.createTextNode(randomNum).textContent;
        var lineaLista = parrafo.innerHTML = textoParrafo;
        document.write("<li>" + lineaLista + "</li>");
        escribir("<ul>");
        for(let e = 1; e<=numSubHijos; e++){
            
            var subParrafo = document.createElement("p");
            var subTexto = document.createTextNode(randomNum).textContent;
            var subLineaLista = subParrafo.innerHTML = subTexto;
            document.write("<li>" + subLineaLista + "</li>");
            
        }
        escribir("</ul>");
    }
    escribir("</ul>");
}


document.querySelector("#mostrar").addEventListener('click', () =>{
    var numhijos = parseInt(document.querySelector("#numHijos").value);
    var numsubhijos = parseInt(document.querySelector("#numSubHijos").value);
    mostrarLista(numhijos,numsubhijos);
});
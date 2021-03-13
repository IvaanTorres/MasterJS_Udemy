'use strict'

function escribir(texto) {
    document.write(texto);
}

document.querySelector("#calcular").addEventListener('click', function () {

    //NOMBRES
    var uno = document.querySelector("#uno").value;
    var dos = document.querySelector("#dos").value;
    var tres = document.querySelector("#tres").value;
    var cuatro = document.querySelector("#cuatro").value;
    var cinco = document.querySelector("#cinco").value;
    var seis = document.querySelector("#seis").value;

    //NOTAS
    var unoNota = parseFloat(document.querySelector("#unoNota").value);
    var dosNota = parseFloat(document.querySelector("#dosNota").value);
    var tresNota = parseFloat(document.querySelector("#tresNota").value);
    var cuatroNota = parseFloat(document.querySelector("#cuatroNota").value);
    var cincoNota = parseFloat(document.querySelector("#cincoNota").value);
    var seisNota = parseFloat(document.querySelector("#seisNota").value);

    var alumnos = new Array(uno, dos, tres, cuatro, cinco, seis);
    var notas = new Array(unoNota, dosNota, tresNota, cuatroNota, cincoNota, seisNota);

    var suma = 0;
    if (!isNaN(unoNota) || !isNaN(dosNota) || !isNaN(tresNota) || !isNaN(cuatroNota) || !isNaN(cincoNota) || !isNaN(seisNota)) {
        escribir("<ul>");
        for (var i = 0; i < 6; i++) {
            var listaNotas = [
                escribir("<li> El alumno " + alumnos[i] + " ha sacado un " + notas[i] + "</li>")
            ];
            suma = suma + notas[i];
        }
        escribir("</ul>");

        var media = suma / i;
        media = media.toFixed(2);
        escribir("La media de la clase es de: " + media + "<br>");

        alumnos.forEach((alumno, index)=>{
            if(notas[index] < media){
                escribir("El alumno " + alumno + " con nota: " + notas[index] + " está por debajo de la media ("+ media +")<br>");
            }
        });
    }else{
        escribir("error");
    }
});
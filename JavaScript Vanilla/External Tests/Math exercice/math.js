'use strict'

window.addEventListener('load', () => {
    var form = document.querySelector(".form");
    form.addEventListener('submit', (event) => {
        var numberInput = document.querySelector("#number").value;
        if(numberInput.length < 1 || numberInput.includes("e")){
            alert("ERROR: NO VÁLIDO");
            event.preventDefault();
            return false;
        }
        var cubeRoot = Math.cbrt(numberInput);
        var smallAprox = Math.ceil(numberInput);
        var bigAprox = Math.floor(numberInput);
        var round = Math.round(numberInput);
        var signOfNumber = Math.sign(numberInput);
        var squareRoot = Math.sqrt(numberInput);
        var truncNumber = Math.trunc(numberInput);

        var operations = [`CubeRoot = ${cubeRoot}`, `smallAprox = ${smallAprox}`, `bigAprox = ${bigAprox}`, `round = ${round}`, `signOfNumber = ${signOfNumber}`,`squareRoot = ${squareRoot}`, `truncNumber = ${truncNumber}`]
        var results = document.querySelector(".results");

        results.innerHTML = "";
        getOperations();

        event.preventDefault();
        return false;

        function getOperations(){
            operations.forEach((element, index, array) => {
                results.append(element);
                addBR(results);
            });
        }
        function addBR(text){
            var br = document.createElement("br");
            text.appendChild(br);
        }
    });
});
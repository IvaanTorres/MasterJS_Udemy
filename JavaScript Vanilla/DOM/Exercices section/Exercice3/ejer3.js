'use strict'

window.addEventListener('load', () => {
    // var number = document.getElementsByClassName("number");
    var one = document.querySelector("#one");
    var two = document.querySelector("#two");
    var three = document.querySelector("#three");
    var four = document.querySelector("#four");
    var five = document.querySelector("#five");
    var six = document.querySelector("#six");
    var seven = document.querySelector("#seven");
    var eight = document.querySelector("#eight");
    var nine = document.querySelector("#nine");
    var zero = document.querySelector("#zero");

    var plus = document.querySelector("#plus");
    var minus = document.querySelector("#minus");
    var multiply = document.querySelector("#multiply");
    var divide = document.querySelector("#divide");
    var equal = document.querySelector("#equal");

    var screen = document.querySelector("#operation");

    screen.innerHTML = "";

/* -------------------------------------------------------------------------- */
/*                                   Numbers                                  */
/* -------------------------------------------------------------------------- */

    one.addEventListener('click', () => {
        screen.append("1");
    });
    two.addEventListener('click', () => {
        screen.append("2");
    });
    three.addEventListener('click', () => {
        screen.append("3");
    });
    four.addEventListener('click', () => {
        screen.append("4");
    });
    five.addEventListener('click', () => {
        screen.append("5");
    });
    six.addEventListener('click', () => {
        screen.append("6");
    });
    seven.addEventListener('click', () => {
        screen.append("7");
    });
    eight.addEventListener('click', () => {
        screen.append("8");
    });
    nine.addEventListener('click', () => {
        screen.append("9");
    });
    zero.addEventListener('click', () => {
        screen.append("0");
    });

/* -------------------------------------------------------------------------- */
/*                                      Operators                                     */
/* -------------------------------------------------------------------------- */

    plus.addEventListener('click', () => {
        screen.append("+");
    });
    minus.addEventListener('click', () => {
        screen.append("-");
    });
    multiply.addEventListener('click', () => {
        screen.append("X");
    });
    divide.addEventListener('click', () => {
        screen.append("/");
    });

/* -------------------------------------------------------------------------- */
/*                                      Equal                                     */
/* -------------------------------------------------------------------------- */

    equal.addEventListener('click', () => {
        var operation = screen.textContent.replace('X','*');
        var resultado = eval(operation);
        screen.innerHTML = resultado;
    });
});
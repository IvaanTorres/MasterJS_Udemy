'use strict'

window.addEventListener('load', () => {
    import { cliente } from './cliente.js';

    hola();

    function hola(){
        var signUpForm = document.querySelector(".signUpForm");
        signUpForm.addEventListener('submit', (evt) => {
            signUpControl(evt);
        });
    }

    function signUpControl(evt){
        var signUpName = document.querySelector(".user").value;
        var signUpPassword = document.querySelector(".password").value;

        if(signUpName.length == 0 || signUpPassword.length == 0){
            alert("ERROR: Campos vacios.");
            evt.preventDefault();
        }else{
            alert("BIEN");
            var x = new cliente();
            x.name = "Ivan";
            console.log(x.name);
        }
    }
});
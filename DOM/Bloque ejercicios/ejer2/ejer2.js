'use strict'
/* 
1. Pedir el nombre del cliente, si el nombre no es un tipo string o es nulo, te debe pedir de nuevo que ingreses correctamente tu nombre.
 
2. Pedir la edad del cliente, si la edad no es numérico es nulo, te debe pedir de nuevo que ingreses correctamente tu edad.
 
3. Pedir que ingreses el nombre de la película que esta en cartelera (ingresar la película tal cual como este escrito), para ello se debe mostrar un listado de las películas ('Spider Man', 'Superman', 'Dragon Ball Super', 'La era del hielo', 'xvideos').
 
Si el cliente ingresa una película que no esta en la cartelera o es nulo, te debe pedir de nuevo que ingreses correctamente la película en cartelera.
 
4. Si la edad del cliente es menor o igual a 17 y la película que escogió es "xvideos", deberá mostrarle un mensaje que no tiene permiso de acceder al cine. Caso contrario, se realizara
lo siguiente:
 
5. Si la edad del cliente es menor o igual a 17, tendrá un descuento del 50% y así mismo tendrá de regalo incluido: Galletas, Cheezetos, Hot Dog y Gaseosa.
 
6. Si la edad del cliente es mayor o igual a 18 y menor o igual a 25, no tendrá descuento alguno pero si tendrá de regalo incluido: Cancha y Gaseosa.
 
7. Si la edad del cliente es mayor o igual a 26 y menor o igual a 35, tendrá un descuento del 10% y así mismo tendrá de regalo incluido: Cancha, Papas Fritas y Gaseosa.
 
8. Si la edad del cliente es mayor o igual a 36, tendrá un descuento del 20% y así mismo tendrá de regalo incluido: Cancha, Galletas y Agua.
*/

window.addEventListener('load', () => {
    var films = [
        "Spider-Man",
        "Super-Man",
        "Dragon Ball",
        "La era del hielo",
        "XVideos"
    ]
    const regExpName = /[0-9]/;
    const regExpAge = /^[0-9]{1,}$/;
    var discount = 1;
    var presents = [];
    const basePrice = 9.99;

    do{
        var name = prompt("Escribe tu nombre");
    }while(name.match(regExpName) || name.length == 0 || name == null);

    do{
        var age = prompt("Ingresa tu edad");

    }while(!age.match(regExpAge) || age == null);
    age = parseInt(age);

    do{
        var filmList = "";
        films.forEach(film => {
            let filmIndex = films.indexOf(film) + 1;
            filmList += filmIndex + ") " + film + '\n'; 
        });
        var filmChoice = prompt(filmList);
    }while((filmChoice != "1" && filmChoice != "2" && filmChoice != "3" && filmChoice != "4" && filmChoice != "5") || filmChoice == null);

    if(age <= 17 && films[filmChoice - 1] == "XVideos"){
        alert("ERROR: Pelicula NO autorizada.");
        return false;
    }else if(age <= 17 ){
        discount = 50;
        insertPresents("Galletas", "Cheezetos", "Hot Dog", "Gaseosa");
    }else if(age >= 18 && age <= 25){
        discount = 0;
        insertPresents("Cancha", "Gaseosa");
    }else if(age >= 26 && age <= 35){
        discount = 10;
        insertPresents("Cancha", "Papas", "Fritas", "Gaseosa");
    }else if(age >= 36){
        discount = 20;
        insertPresents("Cancha", "Galletas", "Agua");
    }

    showFinalPrice();

    function showFinalPrice(){
        var finalPrice = "Base price: " + basePrice + '€\n';
        finalPrice += "Discount: " + discount + '%\n';
        if(discount != 0){
            var price = basePrice*discount/100;
            finalPrice += "Final price: " + price.toFixed(2) + "€";
        }else{
            finalPrice += "Final price: " + basePrice.toFixed(2) + "€";
        }
        alert(finalPrice);
    }

    function insertPresents(...present){
        presents.push(...present);
    }
    
});
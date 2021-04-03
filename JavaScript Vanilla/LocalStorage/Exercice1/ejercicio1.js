'use strict'

window.addEventListener('load', () => {
    var form = document.querySelector("#form");
    var form2 = document.querySelector("#form2");
    var filmContent = document.querySelector("#filmContent");

    form.addEventListener('submit', () => {
        filmContent.innerHTML = "";
        var filmEntry = document.querySelector("#newFilm").value; //! type String
        if(filmEntry.length != 0){
            localStorage.setItem(filmEntry, filmEntry);
        }else{
            alert("ERROR: Campo vacio");
        }
        showInfo();
    });

    form2.addEventListener('submit', () => {
        filmContent.innerHTML = "";
        var deletedFilm = document.querySelector("#deleteFilm").value;
        if(deletedFilm.length != 0){
            localStorage.removeItem(deletedFilm);
        }else{
            alert("ERROR: Campo vacio");
        }
        showInfo();
    });

    function showInfo(){
        for(let index in localStorage){ //! type Object Array
            var item = localStorage[index];
            if(typeof(item) == "string"){
                filmContent.append(item + '\n');
            }
        }
    }
});
'use strict'

window.addEventListener('load', () => {
    var currentTime = document.querySelector(".horaActual");
    var currentDate = document.querySelector(".fechaActual");
    var currentDate2 = document.querySelector(".fechaActual2");
    
    var intervalTime = setInterval(() => {
        var time = new Date();
        currentTime.innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
        currentDate.innerHTML = getCurrentDate1(time);
        currentDate2.innerHTML = getCurrentDate2(time);
    }, 1000);

    function getCurrentDate1(time){
        let day = time.getDay();
        let month = time.getMonth();
        let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
        let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let date = time.getDate() + " " + days[day] + ", " + months[month] + " " +time.getFullYear();
        return date;
    };

    function getCurrentDate2(time){
        let day = time.getDate() + " - " + (time.getMonth() + 1) + " - " + time.getFullYear();
        return day; 
    }
});
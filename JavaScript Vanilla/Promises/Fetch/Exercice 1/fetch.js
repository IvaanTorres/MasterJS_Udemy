'use strict'

var loading = document.querySelector(".loadingContainer");
var result = document.querySelector(".result");
var result2 = document.querySelector(".result2");

var usuarios = [];
fetch("https://reqres.in/api/users")
    .then(data => data.json())
    .then(users => {
        // console.log(users);
        usuarios = users.data;
        console.log(usuarios);
        addToScreen();
        loading.style.display = "none";
        return fetch("https://reqres.in/api/users/2");
    })
    .then(data => data.json())
    .then(user => {
        addToScreen1User(user.data);
        return newUser();
    })
    .then((user) => JSON.parse(user))
    .then((user) => addToScreen1User(user));

function addToScreen(){
    usuarios.map((user) => {
        var entry = document.createElement("h3");
        entry.append(user.first_name);
        result.appendChild(entry);
    });
    
}
function addToScreen1User(user){
    console.log(user);
    var h3 = document.createElement('h3');
    h3.append(user.first_name);
    result2.appendChild(h3);
    var avatar = document.createElement('img');
    avatar.width = '300';
    avatar.src = user.avatar;
    result2.appendChild(avatar);
}
function newUser(){
    var newUser = {
        first_name:"ivan",
        surname:"torres",
        age:18,
        city:"Valencia",
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29uYXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
    }
    return new Promise((resolve, reject) => {
        var JSON_String = '';
        setTimeout(() => {
            JSON_String = JSON.stringify(newUser);
            if(typeof(JSON_String) != 'string' || JSON_String == ''){
                return reject('ERROR');
            }
            return resolve(JSON_String);
        }, 3000);
    });
}
var nav = document.querySelector(".nav");
var button = document.querySelector(".button");
var menu = document.querySelector(".menu");
button.addEventListener('click', () => {
    menu.classList.toggle("menu2");
    nav.classList.toggle("nav3");
});

'use strict';

let key;

const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text"),

    registrationBox = body.querySelector(".wellcum_block"),
    inputs = body.querySelectorAll('.wellcum_imp');

    // регистрация
    regInputs = body.querySelectorAll(".wellcum_imp");



toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    registrationBox.classList.toggle("light_box");
    
    for (key in inputs){
        inputs[key].classList.toggle("light_inp");


    // поля
    try {
        get_light_mode(regInputs, "text");
    } catch (e) {
        console.log(e);

    }

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
    } else {
        modeText.innerText = "Dark mode";

    }

});

});

function get_light_mode(arr, type){
    for (let index = 0, len = arr.length; index < len; ++index) {
        if (type == "box"){
            arr[index].classList.toggle("light_box"); 
        }else if(type == "text"){
            arr[index].classList.toggle("light_inp"); 
        }
    }
}


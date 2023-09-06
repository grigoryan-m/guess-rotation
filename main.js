"use strict";

    function getRandomNum(max){
        return Math.round(Math.random() * max);
    }

document.addEventListener("DOMContentLoaded", ()=>{
    const angleInput = document.getElementById("angleInput")
    ,submitButton = document.getElementById("submitButton")
    ,angle = document.getElementById("angle");

    angle.innerText = getRandomNum(360);
    angleInput.addEventListener("input", ()=>{
        
    });

    submitButton.addEventListener("click", ()=>{
        
    });
});
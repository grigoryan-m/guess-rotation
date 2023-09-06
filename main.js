"use strict";

    function getRandomNum(max){
        return Math.round(Math.random() * max);
    }

document.addEventListener("DOMContentLoaded", ()=>{
    const degreeInput = document.getElementById("angleInput")
    ,submitButton = document.getElementById("submitButton")
    ,target = document.getElementById("angle")
    ,arrow = document.getElementsByClassName("arrow")[0]
    ,circle = document.getElementsByClassName("circle")[0];

    
    target.innerText = getRandomNum(360);

    function getArrowPosition(){
        const degree = degreeInput.value;
        const radians = (degree - 90) * (Math.PI / 180);
        const radius = circle.offsetWidth / 2; 
        const x = radius * Math.cos(radians);
        const y = radius * Math.sin(radians);
    
        arrow.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${degree}deg)`;
    }
    getArrowPosition();
    degreeInput.addEventListener('input', getArrowPosition);

    function submit(){
        let userAngle = parseInt(angleInput.value);

        if(userAngle === 360){
            userAngle = 0;
        }

        let correctAngle = parseInt(target.innerText);
        const angleDifference = Math.abs(correctAngle - userAngle);
    
        const accuracyPercentage = 100 - (angleDifference / 360) * 100;
    
        alert(`Your accuracy is ${accuracyPercentage.toFixed(1)}%\nYour angle was ${userAngle}°`);

        location.reload();
    }
    submitButton.addEventListener("click", submit);

    document.addEventListener("keydown", (event)=>{
        if(event.code === "Space"){
            submit();
        }
    });
});

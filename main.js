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

    degreeInput.addEventListener('input', () => {
        const degree = degreeInput.value;
        const radians = (degree - 90) * (Math.PI / 180); // Преобразование градусов в радианы
        const radius = circle.offsetWidth / 2; // Радиус круга
    
        // Рассчитываем координаты x и y на окружности
        const x = radius * Math.cos(radians);
        const y = radius * Math.sin(radians);
    
        // Устанавливаем положение стрелки на окружности
        arrow.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${degree}deg)`;
    });

    submitButton.addEventListener("click", ()=>{

    // Получаем угол, выбранный пользователем из input
    let userAngle = parseInt(angleInput.value);

    if(userAngle === 360){
        userAngle = 0;
    }

    let correctAngle = parseInt(target.innerText);
    // Вычисляем разницу между углами и получаем абсолютное значение
    const angleDifference = Math.abs(correctAngle - userAngle);
  
    // Вычисляем процент близости к правильному ответу
    const accuracyPercentage = 100 - (angleDifference / 360) * 100;
  
    // Отображаем процент на странице
    alert(`Вы были близки к правильному ответу на ${accuracyPercentage.toFixed(0)}%`);

    location.reload();
    });
});

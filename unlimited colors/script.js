const body = document.querySelector('body');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');


const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i<6; i++){
        color += hex[(Math.round(Math.random()*16))]
    }
    return color;
}
let intervalId;
const startColorChange = function() {
    intervalId = setInterval(changeBg, 1000);

    function changeBg() {
        body.style.backgroundColor = randomColor();
    }
    
}
const stopColorChange = function () {
    clearInterval(intervalId);
}
start.addEventListener('click', startColorChange);
stop.addEventListener('click',stopColorChange);


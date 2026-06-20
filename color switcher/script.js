const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
    button.addEventListener('click', function(e) {
        
        console.log(e.target);
        if(e.target.id === 'purple'){
            body.style.backgroundColor = "#6B2D5C"
            body.style.color = "white"
        }
        if(e.target.id === 'dark'){
            body.style.backgroundColor = "#F0386B"
            body.style.color = "white"
        }
        if(e.target.id === 'med'){
            body.style.backgroundColor = "#FF5376"
            body.style.color = "white"
        }
        if(e.target.id === 'light'){
            body.style.backgroundColor = "#F8C0C8"
            body.style.color = "black"
        }
        
    })
    
    
});
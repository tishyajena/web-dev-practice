let num = parseInt(Math.round(Math.random()*100));

const userInput = document.getElementById('guessField');
const submit = document.querySelector('#sub');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', (event) => {
        event.preventDefault();
        const guess1 = parseInt(userInput.value);
        console.log(guess1);
        validateGuess(guess1)
    });
    
}

function validateGuess(guess){
    if(Number.isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if(guess < 1){
        alert('Please enter a number greater than 1');
    }
    else if(guess > 100){
        alert('Please enter a number smaller than 100');
    }
    else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over, Random Number was ${num}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === num){
        displayMessage(`You got it! The number was ${num}`);
        endGame();
    }
    else if(guess < num){
        displayMessage(`Guess higher...`);
    }
    else{
        displayMessage(`Guess lower...`);
    }

}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;

}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(){
        num = parseInt(Math.round(Math.random()*100));
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        
        playGame = true;
    })
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
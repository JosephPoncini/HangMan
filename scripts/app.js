let startBtn = document.getElementById("startBtn");
let restartBtn = document.getElementById("restartBtn");

let secretWord = document.getElementById("secretWord");
let wrongGuesses = document.getElementById("wrongGuesses");
let hangMan = document.getElementById("hangMan");
let userInput = document.getElementById("userInput");

let randomWord = "";
let wrongGuess = "";
let displayWord = [];

let guesses = 0;
let maxGuesses = 5;

startBtn.addEventListener('click', function(e){
    // call our api functions
    ApiCall();

})

function ApiCall(){
    fetch('https://random-word-api.herokuapp.com/word')
        .then((response)=>{
            return response.json();
        })
            .then((data)=>{
                console.log(data[0]);
                StartGame(data[0]);
            })
}

function StartGame(word){
    randomWord = word;

    for(let i = 0; i < randomWord.length; i++){
        displayWord[i] = "_";
    }

    updateGameState();
}

function updateGameState(){

    secretWord.textContent = displayWord.join(" ");

    hangMan.textContent = `Guesses Left ${guesses} / ${maxGuesses}`
}
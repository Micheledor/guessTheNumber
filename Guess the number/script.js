'use strict';

// GUESS THE NUMBER

// Random number
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// Player score
let score = 20;
// Player high-score
let highScore = 0;
// Score in DOM
const scoreDom = document.querySelector('.score');
// Body in DOM
const bodyDom = document.querySelector('body');
// (? || n) in DOM
const numberDom = document.querySelector('.number');

//Update the score && set "You lose"
const updateScore = function () {
  if (score > 0) {
    scoreDom.textContent = score;
  } else {
    scoreDom.textContent = 0;
    displayMessage('You lose. 😢');
    bodyDom.style.backgroundColor = 'red';
  }
};
//Display the message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};


////////////////////////////////////////////////////////////////////////////   EVENT
document.querySelector('.check').addEventListener('click', function() {

  let guess = Number(document.querySelector('.guess').value);             // Player guess

  if (!guess) {                                                             // Invalid input
    displayMessage('No valid input ⛔');

  } else if (guess === secretNumber) {                                      // Win
     displayMessage('You won! 🎉');
     bodyDom.style.backgroundColor = '#60b347';
     numberDom.textContent = secretNumber;
     if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
     }
  } else if (guess != secretNumber) {                                        // Too high
    guess > secretNumber ? displayMessage('Too high 📉') : displayMessage('Too low 📈');
     score--;
     updateScore();
  }
});

document.querySelector('.again').addEventListener('click', function() {
  bodyDom.style.backgroundColor = '#222';
  numberDom.textContent = '? ';
  let guess = Number(document.querySelector('.guess').value = '');
  score = 20;
  scoreDom.textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('🤔 Start guessing... ');
  if (guess == secretNumber && score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
   }
});  
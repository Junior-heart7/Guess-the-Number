'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct secretNumber!';
// changing the message. This means DOM Manipulation.

document.querySelector('.secretNumber').textContent = 13;
document.querySelector('.score').textContent = 30;

// we use input element to get value property, So

                    // Class Element  
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// handling Click Events
//implementing the game logic
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let chanceRemaining = 20; // Each time that we guess a wrong number, our chanceRemaining should show to a decreased number 20 - 19 ..... so create a variable for that called number and store the value there
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //lets compare the secret number to the users guess
  //implementing the game logic

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347'; // changing the Body color if we win (manipulating with css using JS)
    document.querySelector('.number').style.width = '30rem';

    if (chanceRemaining > highScore) {
      highScore = chanceRemaining;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when guess is too high
  } else if (guess > secretNumber) {
    if (chanceRemaining > 0) {
      document.querySelector('.message').textContent = 'Too High!';
      // Each time that we guess a wrong number, our chanceRemaining should show to a decreased number 20 - 19 ..... so create a variable for that called number and store the value there
      chanceRemaining--;
      document.querySelector('.chanceRemaining').textContent = chanceRemaining;
    } else {
      document.querySelector('body').style.backgroundColor = '#f32400'; // changing the Body color if we loose (manipulating with css using JS)
      document.querySelector('.number').style.width = '30rem';

      document.querySelector('.message').textContent = 'You Lost the Game';
      document.querySelector('.chanceRemaining').textContent = 0;
    }

    //when guess is too low
  } else if (guess < secretNumber) {
    if (chanceRemaining > 0) {
      document.querySelector('.message').textContent = '📉 Too low!';
      chanceRemaining--;
      document.querySelector('.chanceRemaining').textContent = chanceRemaining;
    } else {
      document.querySelector('body').style.backgroundColor = '#f32400'; // changing the Body color if we loose (manipulating with css using JS)
      document.querySelector('.number').style.width = '30rem';

      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.chanceRemaining').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  chanceRemaining = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.chanceRemaining').textContent = chanceRemaining;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

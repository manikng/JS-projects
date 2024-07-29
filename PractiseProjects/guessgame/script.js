
// form,.guessField,#subt <- I/o
// .resultParas->.guesses(Previous Guesses)
// .lastResult(guesrem),.lowOrHi
// missing: randomNO gen,if won gues == randomNO then output res,
// if game end then start a new game
const form = document.getElementsByClassName('form');
const UserIo = document.querySelector('#guessField');
const submit = document.getElementById('subt');
const Respara = document.querySelector('.resultParas');
const prevGuess = document.querySelector('.guesses');
const Guessrem = document.querySelector('.lastResult');
const hiorlow = document.querySelector('.lowOrHi');

let rand = parseInt(Math.random() * 10 + 1);
console.log(rand);
//now actual result show karne ke liye para
const p = document.createElement('p');
let prevs = [];
let cnt = 0;
let playGame = true;
const newgm = document.querySelector('#newGM');
//game start

// if(playGame){ game();} incorrect
function game() {
  if (playGame) {
    submit.addEventListener('click', function (e) {
      e.preventDefault();
      const userGs = parseInt(UserIo.value);
      console.log(userGs);
      validate(userGs);
    });
  } else {
    endgame;
  }
}
game();

function validate(userGs) {
  if (isNaN(userGs) || userGs < 1 || userGs > 10) {
    alert('Invalllllllllid!!!!!!!!!``~~!');
  } else {
    cnt++;
    if (cnt >= 4) {
      UserIo.value = ' ';
      alert('GAME OVER END GAME');
      UserIo.setAttribute('disabled', '');
      Guessrem.innerHTML = '0';
      playGame = false;
      endgame();
    } else {
      check(userGs);
    }
  }
}
function check(userGs) {
  Guessrem.innerHTML = `${3 - cnt}`;
  prevs.push(userGs);
  prevGuess.innerHTML += `${prevs} , `;
  prevs = [];
  if (userGs === rand) {
    alert("jeeet gayeeeee hoooooooooo aaaaaaaaaaaap '\n' oh oh oh oh ");
    playGame = false;
    displaymsg(`CCOnGGo YOU WON THE GAME  RANDOM NO IS ${rand}`);
  } else if (userGs < rand) {
    displaymsg(`too low`);
  } else {
    displaymsg('TOO HIGH');
  }
}
function displaymsg(msg) {
  p.innerHTML = `<h2>${msg}</h2>`;
  Respara.appendChild(p);
}
// document.querySelector('#newGM').addEventListener('click',game()) INCORRECT BECUSE instead of passing fxn reference u are immediatly calling that fxn
function endgame() {
  prevs = [];
  UserIo.value = '';
  cnt = 0;
}
// document.querySelector('#endgame').addEventListener('click',endgame());Icorrect fxn ko invoke nahi karna hai turant to keval endgame reference paas karna hota hao
//fix
document.querySelector('#endgame').addEventListener('click', endgame);


// let randomNumber = parseInt(Math.random() * 100 + 1);

// const submit = document.querySelector('#subt');
// const userInput = document.querySelector('#guessField');
// const guessSlot = document.querySelector('.guesses');
// const remaining = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');
// const startOver = document.querySelector('.resultParas');

// const p = document.createElement('p');

// let prevGuess = [];
// let numGuess = 1;

// let playGame = true;

// if (playGame) {
//   submit.addEventListener('click', function (e) {
//     e.preventDefault();
//     const guess = parseInt(userInput.value);
//     console.log(guess);
//     validateGuess(guess);
//   });
// }

// function validateGuess(guess) {
//   if (isNaN(guess)) {
//     alert('PLease enter a valid number');
//   } else if (guess < 1) {
//     alert('PLease enter a number more than 1');
//   } else if (guess > 100) {
//     alert('PLease enter a  number less than 100');
//   } else {
//     prevGuess.push(guess);
//     if (numGuess === 11) {
//       displayGuess(guess);
//       displayMessage(`Game Over. Random number was ${randomNumber}`);
//       endGame();
//     } else {
//       displayGuess(guess);
//       checkGuess(guess);
//     }
//   }
// }

// function checkGuess(guess) {
//   if (guess === randomNumber) {
//     displayMessage(`You guessed it right`);
//     endGame();
//   } else if (guess < randomNumber) {
//     displayMessage(`Number is TOOO low`);
//   } else if (guess > randomNumber) {
//     displayMessage(`Number is TOOO High`);
//   }
// }

// function displayGuess(guess) {
//   userInput.value = '';
//   guessSlot.innerHTML += `${guess}, `;
//   numGuess++;
//   remaining.innerHTML = `${11 - numGuess} `;
// }

// function displayMessage(message) {
//   lowOrHi.innerHTML = `<h2>${message}</h2>`;
// }

// function endGame() {
//   userInput.value = '';
//   userInput.setAttribute('disabled', '');
//   p.classList.add('button');
//   p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
//   startOver.appendChild(p);
//   playGame = false;
//   newGame();
// }

// function newGame() {
//   const newGameButton = document.querySelector('#newGame');
//   newGameButton.addEventListener('click', function (e) {
//     randomNumber = parseInt(Math.random() * 100 + 1);
//     prevGuess = [];
//     numGuess = 1;
//     guessSlot.innerHTML = '';
//     remaining.innerHTML = `${11 - numGuess} `;
//     userInput.removeAttribute('disabled');
//     startOver.removeChild(p);

//     playGame = true;
//   });
// }

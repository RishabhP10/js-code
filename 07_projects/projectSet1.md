# Project Related To DOM

# Project Link
[Click](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# Solution Code

## Project 1
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (bt) {
  console.log(bt);
  bt.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## Project 2
```javascript
// To Calculate BMI ----
 const form = document.querySelector('form');
// const height = parseInt(document.querySelector('#height').value)
// if we write above the event the value is set to null
// this usecase will give you empty value

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a vaild height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a vaild weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // result...
    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi}</span><p>UnderWeight</p>`;
    } else if (18.6 <= bmi > 24.9) {
      results.innerHTML = `<span>${bmi}</span><p>NormalRange</p>`;
    } else {
      results.innerHTML = `<span>${bmi}</span><p>OverWeight</p>`;
    }
  }
});


```

## Project 3
```javascript
// set the local time---
const clock = document.querySelector('#clock');
// remember the syntex
/* setInterval is a function where code run in every interval , (function, time(inMiliSec)) */

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## Project 4
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const userGuess = document.querySelector('.guesses');
const Result = document.querySelector('.lastResult');
const LowHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  /* value not be negative, more than 100 etc..*/
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`GAME OVER . Random number was ${randomNumber}`);
      endgame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // if the guess is validate
  if (guess === randomNumber) {
    displayMessage(`You Guessed it right`);
    endgame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is Less`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is More`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  userGuess.innerHTML += `${guess}  `;
  numGuess++;
  Result.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  // manupilation with dom
  LowHigh.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id = "newGame">Start New Game..</h2>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    userGuess.innerHTML = '';
    Result.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
```

## Project BodyColorChange
```javascript
// generate a random value color
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
const startChangingColor = function () {
  intervalId = setInterval(changeBgColor, 1000);

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
```


## Project KeyCode
```javascript
// console.log('Project 5');

const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class = "color" >
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === '' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
</div>`;
});
```
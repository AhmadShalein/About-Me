'use strict';

let userName = prompt('What\'s your name?');
console.log(userName);
alert('Welcome to my website ' + userName);

let score = 0;

// Guess QuestionOne:
function questionOne(){
  let myName = prompt('Do you think my first name is Ahmad?');
  myName = myName.toLowerCase();
  switch(myName){
  case 'yes':
  case 'y':
    console.log('You\'re correct');
    alert('Yes actually my first name is Ahmad');
    score++;
    break;
  case 'no':
  case 'n':
    console.log('you\'re wrong');
    alert('you\'re wrong');
    break;
  default:
    alert('Please guess the answer');
  }
  if (myName === 'yes' || myName === 'y'){
    console.log('True Answer');
  } else {
    console.log('False Answer');
  }
}
questionOne();
// Guess QuestionTwo:
function questionTwo(){
  let twin = prompt('Am I have a twin?');
  twin = twin.toLowerCase();
  switch(twin){
  case 'yes':
  case 'y':
    console.log('you\'re wrong');
    alert('you\'re wrong');
    break;
  case 'no':
  case 'n':
    console.log('you\'re correct');
    alert('you\'re correct, I don\'t have a twin correct');
    score++;
    break;
  default:
    alert('Please guess the answer');
  }
  if (twin === 'yes' || twin === 'y'){
    console.log('False Answer');
  } else {
    console.log('True Answer');
  }
}
questionTwo();
// Guess QuestionThree:
function questionThree(){
  let country = prompt('Do you think that I come from Jordan?');
  country = country.toLowerCase();
  switch(country){
  case 'yes':
  case 'y':
    console.log('you\'re correct');
    alert('You\'re correct, I come from Jordan');
    score++;
    break;
  case 'no':
  case 'n':
    console.log('you\'re wrong');
    alert('you\'re wrong');
    break;
  default:
    alert('Please guess the answer');
  }
  if (country === 'yes' || country === 'y'){
    console.log('True Answer');
  } else {
    console.log('False Answer');
  }
}
questionThree();

// Guess QuestionFour:
function questionFour() {
  let major = prompt('Do you think my major is Electrical Engineering?');
  major = major.toLowerCase();
  switch(major){
  case 'yes':
  case 'y':
    console.log('you\'re correct');
    alert('You\'re correct, I am an Engineer');
    score++;
    break;
  case 'no':
  case 'n':
    console.log('you\'re wrong');
    alert('you\'re wrong');
    break;
  default:
    alert('Please guess the answer');
  }
  if (major === 'yes' || major === 'y'){
    console.log('True Answer');
  } else {
    console.log('False Answer');
  }
}
questionFour();

// Guess QuestionFive:
function questionFive(){
  let marriage = prompt('Do you think I am married?');
  marriage = marriage.toLowerCase();
  switch(marriage){
  case 'yes':
  case 'y':
    console.log('you\'re wrong');
    alert('you\'re wrong');
    break;
  case 'no':
  case 'n':
    console.log('you\'re correct');
    alert('You\'re correct, I am not married');
    score++;
    break;
  default:
    alert('Please guess the answer');
  }
  if (marriage === 'yes' || marriage === 'y'){
    console.log('False Answer');
  } else {
    console.log('True Answer');
  }

  alert(' My first name is Ahmad ,' + ' I have a twin ,' + ' I come from Jordan ,' + ' My major is Electrical Engineering ,' + ' I am single ');

  console.log(userName);
  alert('Welcome to my website ' + userName);
}
questionFive();
// Guess QuestionSix:

function questionSix(){
  for(let i = 0 ; i < 4 ; i++){
    let guessNumber = prompt('Guess my favourite number from 1 till 10!');
    guessNumber = parseInt(guessNumber);

    if(guessNumber === 7){
      alert('That is correct! My favorite number is 7!');
      score++;
      break;
    }else if(guessNumber > 7){
      alert('Too high! Guess again');

    }else if(guessNumber < 7){
      alert('Too low! Guess again');
    }
  }
  alert('My favorite number is 7!');
}
questionSix();


// Guess QuestionSeven:

function questionSeven(){
  let favColour = ['red','orange','yellow','green','blue','violet'];

  for (let i = 0; i < 6; i++) {
    let userAnswer = prompt('Can you guess my favorite colour?').toLowerCase();

    for (let j = 0; j < favColour.length; j++){
      if (userAnswer === favColour[j]) {
        alert('Congrats you got it right!');
        score++;
        i = 6;
        break;
      }
    }
    if (i !== 6){
      alert('Sorry wrong answer, try again');
    }
  }
  alert('My favorite colors are: Red, Orange, Yellow, Green, Blue and Violet!');
}
questionSeven();
alert('Good Job!... You got ' + score + ' correct answers!');

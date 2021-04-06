"use strict";

let userName = prompt('What\'s your name?');
console.log(userName)
alert('Welcome to my website ' + userName);

let myName = prompt('Do you think my first name is Ahmad?'); 
myName = myName.toLowerCase();
switch(myName){
case 'yes':
case 'y':
console.log('You\'re correct')
alert('Yes actually my first name is Ahmad');
break;
case 'no':
case 'n':
console.log('you\'re wrong')
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

let twin = prompt('Am I have a twin?'); 
twin = twin.toLowerCase();
switch(twin){
case 'yes':
case 'y':
console.log('you\'re correct')
alert('you\'re correct, I have a twin correct');
break;
case 'no':
case 'n':
console.log('you\'re wrong')
alert('you\'re wrong');
break;
default:
alert('Please guess the answer');
}
if (twin === 'yes' || twin === 'y'){
    console.log('True Answer');
} else {
    console.log('False Answer');
}

let country = prompt('Do you think that I come from Jordan?');
country = country.toLowerCase();
switch(country){
case 'yes':
case 'y':
console.log('you\'re correct')
alert('You\'re correct, I come from Jordan');
break;
case 'no':
case 'n':
console.log('you\'re wrong')
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

let major = prompt('Do you think my major is Electrical Engineering?');
major = major.toLowerCase();
switch(major){
case 'yes':
case 'y':
console.log('you\'re correct')
alert('You\'re correct, I am an Engineer');
break;
case 'no':
case 'n':
console.log('you\'re wrong')
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

let marriage = prompt('Do you think I am married?');
marriage = marriage.toLowerCase();
switch(marriage){
case 'yes':
case 'y':
console.log('you\'re wrong')
alert('you\'re wrong');
break;
case 'no':
case 'n':
console.log('you\'re correct')
alert('You\'re correct, I am not married');
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

console.log(userName)
alert('Welcome to my website ' + userName);

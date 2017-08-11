'use strict';

var counter = 0;
for (var i = 0; i < 7; i++) {
  counter++;
}

var userName = prompt ('My name is Marco. What\'s your name?');
console.log(userName);

var score = 0;
var guessOne = function(){
  var questionOne = prompt('Is blue your favorite color?').toUpperCase();
  if (questionOne === 'YES' || questionOne === 'Y') {
    alert('You have chosen a wonderful color!');
    console.log(score ++ + ' score ++');
    console.log(score + ' score');
  } else if (questionOne === 'NO' || questionOne === 'N') {
    alert('Not everyone can choose the best color EVER!');
  } else {
    alert('You need to answer either with Yes or No.');
  }
};
guessOne();

var guessTwo = function(){
  var questionTwo = prompt('Do you eat eggplant?').toUpperCase();
  if (questionTwo === 'YES' || questionTwo === 'Y') {
    alert('My heavens! Do I love aubergine!');
    console.log(score++);
  } else if (questionTwo === 'NO' || questionTwo === 'N') {
    alert('That\'s unfortunate.');
  } else {
    alert('You need to answer either with Yes or No.');
  }
};
guessTwo();

var guessThree = function(){
  var questionThree = prompt('Do you enjoy garlic?').toUpperCase();
  if (questionThree === 'YES' || questionThree === 'Y') {
    alert('The allium of the gods!');
    console.log(score++);
  } else if (questionThree === 'NO' || questionThree === 'N') {
    alert('This may - potentially - alter our ability to get along.');
  } else {
    alert('You need to answer either with Yes or No.');
  }
};
guessThree();

var guessFour = function(){
  var questionFour = prompt('Do you like to ride your bike?').toUpperCase();
  if (questionFour === 'YES' || questionFour === 'Y') {
    alert('So do I, no way!');
    console.log(score ++);
  } else if (questionFour === 'NO' || questionFour === 'N') {
    alert('Well, maybe it\'s time to get back out there on that bike?');
  } else {
    alert('You need to answer either with Yes or No.');
  }
};
guessFour();

var guessFive = function(){
  var questionFive = prompt('Have you ever ejected yourself from a plane in-flight?').toUpperCase();
  if (questionFive === 'YES' || questionFive === 'Y') {
    alert('No way!');
  } else if (questionFive === 'NO' || questionFive === 'N') {
    alert('Yes, me neither.');
    console.log(score++);
  } else {
    alert('You need to answer either with Yes or No.');
  }
};
guessFive();

var guessSix = function(){
  for (var i = 0; i < 4; i++) {
    var questionSix = prompt('How many Dalai Lamas have there been up to now?');
    console.log(questionSix);
    if (questionSix === '14') {
      alert('On your deathbed, you will receive total consciousness.');
      break;
      console.log(score++);
    } else if (questionSix > 14) {
      alert('On your deathbed, you will NOT receive total consciousness. No, there have been fewer.');
    } else if (questionSix < 14){
      alert('On your deathbed, you will NOT receive total consciousness. No, there have been more.');
    }
  }
};
guessSix();

var guessSeven = function(){
  var countryNames = ['ITALY', 'GERMANY', 'SRI LANKA'];
  for (var i = 0; i < 6; i++){
    var answerSeven = prompt('Can you guess a country that I have lived in besides the US?');
    console.log(answerSeven);
    if (countryNames.includes(answerSeven.toUpperCase())) {
      alert('That is impressive! Nice work!');
      console.log(score++);
      break;
    } else {
      (answerSeven = countryNames);
      alert('Hey, try again!');

    }
  }
};
guessSeven();

alert(userName + ' got ' + score + ' out of seven questions right. Nice work!');

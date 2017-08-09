'use strict';

var questionOne = prompt('Is blue your favorite color?').toUpperCase();
if (questionOne === 'YES' || questionOne === 'Y') {
  alert('You have chosen a wonderful color!');
} else if (questionOne === 'NO' || questionOne === 'N') {
  alert('Not everyone can choose the best color EVER!');
} else {
  alert('You need to answer either with Yes or No.');
}

var questionTwo = prompt('Do you eat eggplant?').toUpperCase();
if (questionTwo === 'YES' || questionTwo === 'Y') {
  alert('My heavens! Do I love aubergine!');
} else if (questionTwo === 'NO' || questionTwo === 'N') {
  alert('That\'s unfortunate.');
} else {
  alert('You need to answer either with Yes or No.');
}

var questionThree = prompt('Do you enjoy garlic?').toUpperCase();
if (questionThree === 'YES' || questionOne === 'Y') {
  alert('The allium of the gods!');
} else if (questionThree === 'NO' || questionThree === 'N') {
  alert('This may - potentially - alter our ability to get along.');
} else {
  alert('You need to answer either with Yes or No.');
}

var questionFour = prompt('Do you like to ride your bike?').toUpperCase();
if (questionFour === 'YES' || questionFour === 'Y') {
  alert('So do I, no way!');
} else if (questionFour === 'NO' || questionFour === 'N') {
  alert('Well, maybe it\'s time to get back out there on that bike?');
} else {
  alert('You need to answer either with Yes or No.');
}

var questionFive = prompt('Have you ever ejected yourself from a plane in-flight?').toUpperCase();
if (questionFive === 'YES' || questionFive === 'Y') {
  alert('No way!');
} else if (questionFive === 'NO' || questionFive === 'N') {
  alert('Yes, me neither.');
} else {
  alert('You need to answer either with Yes or No.');
}

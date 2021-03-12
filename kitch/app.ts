var myName: string = 'Jake Lovett'; //This is my name

const numberStates: number = 50; //Number of states in the United States of America

var statesPlus: number = numberStates + 4;
var evenMore: number = numberStates + 5; //States plus four and five

function sayHello() {
  alert('Hello World!'); //Hello world alert box
}

function checkAge(userName: string, userAge: number) {
  if (userAge < 21) {
    alert('Sorry, ' + userName + ' you are not old enough to view this page!'); //checkAge text syntax
  }
}

//this is how to add the type to an array of objects
let people: {name: string, age: number}[] = [
  { name: 'Charles', age: 21 },
  { name: 'Abby', age: 27 },
  { name: 'James', age: 18 },
  { name: 'John', age: 17 }, //data
];

people.forEach(function (person) {
  //using as alternative to the 'i' loop
  checkAge(person.name, person.age);
});

// for(i = 0; i < people.length; i++) {
//     let name = people[i].name
//     let age = people[i].age

//     checkAge(name, age);
// }

let veggies: string[] = ['mushrooms', 'bell peppers', 'carrots'];

for (let i: number = 0; i < veggies.length; i++) {
  //???
  console.log(veggies[i]);
}

function getLength(word: string) {
  let wordLength = word.length;
  if (wordLength % 2 === 0) {
    console.log('The world is nice and even!'); //
  } else {
    console.log('The world is an odd place!');
  }
  console.log(wordLength);
}

getLength('Hello World!');

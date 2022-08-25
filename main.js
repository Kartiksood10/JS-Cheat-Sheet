// three dots > more tools > developer tools > console

console.log("Welcome"); //prints on console in browser

// to initialize variable use const or let
// const variables values cannot be reassigned
let age = 30;
age = 31;
console.log(age);

// variables
const name = 'Kartik';
const num = 30;
const x = null; // type is object
console.log(typeof(num));

const hello = `My name is ${name} and I am ${num}`;
console.log(hello);

// converting string values into an array

const s = 'tech, comp, it';
console.log(s.split(', '));

//Arrays

const fruits = ['apple', 'pear', 'grapes'];

//push values to the end
fruits.push('mangoes');
// values added to start
fruits.unshift('strawberry');

console.log(fruits);

//object literals - key value pairs
const person = {
    first:'Kar',
    last:'Sood',
    numb:30,
    hobbies: ['a','b','c'],
    address : {
        street:'abc'
    }

}

console.log(person.first);
console.log(person.hobbies[1]);
console.log(person.address.street);

//Array of objects

const todos = [
    {
        id:1,
        text:'task 1',
        isCompleted: true
    },

    {
        id:2,
        text:'task 2',
        isCompleted: true
    },

    {
        id:3,
        text:'task 3',
        isCompleted: false
    }
];

console.log(todos[1].text);

// converting object array into JSON file

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// for let loop

for(let todo of todos){

    console.log(todo.id);
}

// create a new array with just text

const todoText = todos.map(function(todo){

    return todo.text;

});

console.log(todoText);

// get text of tasks which are completed using filter and map

const todoCompleted = todos.filter(function(todo){

    return todo.isCompleted === true;
}).map(function(todo){

    return todo.text;
})

console.log(todoCompleted);

// === matches value and datatype
// == only matches value

// a = '10' a===10 is false a==10 is true

// Constructor function

// function Person(firstName, lastName, dob){

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     this.getFullName = function(){

//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const person1 = new Person('John','Doe','4-2-1999');
// console.log(person1);
// console.log(person1.getFullName());

// Class - better way to write constructor functions

class Person {

    constructor(firstName, lastName, dob){

        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getFullName() {
        
        return `${this.firstName} ${this.lastName}`;

    }
}


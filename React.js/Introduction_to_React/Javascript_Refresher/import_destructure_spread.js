// Import/Export

import * as util from './util.js';

export default ;
export let cupcakes = 5;

// Destructuring to access function, array and object values quickly

const userNameData = ["Max","Schwarzmüller"];

console.log(userNameData);

const [firstName,lastName] = ["Max","Schwarzmüller"];
//Shorthand for declaring constants (destructuring)

console.log(firstName);

console.log(lastName);


const {name: userName,age: userAge} = {
  name: "Max",
  age: 34
};

console.log(userName);
console.log(userAge);


function storeOrder(order){
  localStorage.setItem('id',order.id);
  localStorage.setItem('currency',order.currency);
}

//Destructuring a function's object parameters
function storeOrder({id,currency}) {
  localStorage.setItem('id',id);
  localStorage.setItem('currency',currency);
}

//Spread operator to join arrays

const animals = ["Newt","Panda","Chicken"];

const newAnimals = ["Lion"];

const mergedAnimals = [...animals,...newAnimals];
console.log(mergedAnimals);


const workerBee = {
    speed: 20,
    age: 43
}

const extendedWorkerBee = {
    ...workerBee,
    weight: 3
}

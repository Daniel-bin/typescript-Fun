// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let name : string;
let age : number;

let person = {name: string, age : number};
person = {name: "joe", age: 3}
person.age = 6;
person.name = "bob";


function createPerson(age, name){
  return {age, name}
}

class Person{
  age : number;
  name : string;
}
let bob = new Person();
bob = createPerson(3, "bob");
console.log("Hello from typescript");

var a = 4;
let b = 2;
const c = 3;
//arrow function
const add1 = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(add1(2, 3));

const add2 = (num1: number, num2: number = 3) => num1 + num2;

const printOutput = (output: string | number) => console.log(output);
printOutput(add2(34));

//spread operator
//const hobbies = ["Sports", "Cooking"];
//const activeHobbies = ["Hiking", ...hobbies];
//activeHobbies.push(...hobbies);

//console.log(activeHobbies);




const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
  firstName: 'Max',
  age: 30
};

const copiedPerson = { ...person };

const add4 = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add4(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName: username, age } = person;

console.log(username, age, person);

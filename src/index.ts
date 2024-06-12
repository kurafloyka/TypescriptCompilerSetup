import { Chicken } from "./chicken";

console.log("Hello, world! Faruk is here!");

const chicken = new Chicken();
chicken.cluck();

// Using TypeScript types
let isready: boolean = true;
let name: string = "Faruk";
let age: number = 25;
console.log(
  `My name is ${name} and I am ${age} years old. Am I ready? ${
    isready ? "Yes" : "No"
  }`
);
console.log(typeof isready + " : " + typeof name + " : " + typeof age);

if (typeof isready === "boolean") {
  console.log("It is a boolean");
} else {
  throw new Error("It is not a boolean");
}

const names: string[] = ["Faruk", "John", "Doe"];
if (names.length > 0) {
  console.log(names[1]);
}

let number1: number;
number1 = 10;

//object types

type Person = {
  name: string;
  age: number;
  isStudent: boolean | string;
};

const person: Person = {
  name: "Faruk",
  age: 25,
  isStudent: true,
};

console.log(person);

//enums
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

// Nested object types with tuples
const product = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
    size: ["M", 3],
  },
  role: Role.ADMIN,
};
console.log(product.role);

//any types
let cityNames: any[] = ["Ankara", "Istanbul", "Izmir", 25, true];

//union types
let input1: number | string = 5;

//literal types

function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

//type aliases/ custom types
type Combinable = number | string;

let combinableValue: Combinable = 5;

//type aliases & object types

type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!


function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
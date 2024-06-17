console.log("Hello, TypeScript!");

const personTest: {
  name: string;
  age: number;
} = {
  name: "Faruk",
  age: 25,
};

console.log(personTest);

alert(`My name is ${personTest.name} and I am ${personTest.age} years old.`);

let product1: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
};
//Beware using this syntax, it is not recommended
const account1: any[] = ["sadas", "asdasd", "asdasd1"];
for (const account of account1) {
  console.log(account.toUpperCase());
}

const data = ["faruk", 25];
console.log(data);

enum Role {
  AUTHOR,
  ADMIN,
  READ_ONLY,
}
console.log(Role.ADMIN);

let product3 = {
  name: "faruk",
  Role: Role.ADMIN,
  hobbies: ["sports", "cooking"],
};

if (product3.Role === Role.ADMIN) {
  console.log("is admin");
}

console.log(product3 instanceof Object);



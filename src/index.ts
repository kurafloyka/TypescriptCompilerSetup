import Lonely from "./singleton";

console.log("Hello from typescript");

const l1 = Lonely.getInstance();
const l2 = Lonely.getInstance();

console.log(l1 === l2); // return true
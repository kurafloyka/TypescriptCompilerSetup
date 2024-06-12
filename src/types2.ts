function printResult(result: number): void {
  console.log(`Result: ${result}`);
}

function add(n1: number, n2: number): number {
  return n1 + n2;
}

// function as type
let combineValues: (a: number, b: number) => number;
combineValues = add;

//function type and callback

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});


let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
  userName = userInput;
}
// never type
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occurred!", 500);
console.log("Hello from typescript");

export default class Lonely {
  private static instance: Lonely;

  private constructor() {}

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new Lonely();
    return this.instance;
  }
}
//We could also use the Lonely class name instead of the this keyword:

//const l1 = Lonely.getInstance();
//const l2 = Lonely.getInstance();

//console.log(l1 === l2); // return true
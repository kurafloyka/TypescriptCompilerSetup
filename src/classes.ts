console.log("Hello from typescript");

abstract class Department {
  private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: number, n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  abstract show(): void;
}

class ITDepartment extends Department {
  show(): void {
    console.log("IT Department");
  }
  admins: string[];
  constructor(id: number, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  show(): void {
    console.log("Accounting Department");
  }
  static fiscalYear = "2020";
  constructor(id: number, private reports: string[], private names: string) {
    super(id, "Accounting");
  }

  get getName() {
    return this.names;
  }

  set setName(value: string) {
    this.names = value;
  }

  addEmployee(employee: string): void {
    if (employee === "Max") {
      return;
    }
    this.employees.push(employee);
  }

  static getFiscalYear() {
    console.log(`Fiscal Year: ${this.fiscalYear}`);
  }
}

//const accounting = new Department(1, "Accounting");
const it = new ITDepartment(2, ["Max"]);

//accounting.addEmployee("Max");
//accounting.addEmployee("Manu");

//accounting.describe();
//accounting.printEmployeeInformation();
//console.log(accounting);

//const accountingCopy = { name: "DUMMY", describe: accounting.describe };
//accountingCopy.describe();

const accountingDepartment = new AccountingDepartment(
  3,
  ["Good", "Bad"],
  "Faruk"
);
console.log(accountingDepartment.getName);
accountingDepartment.setName = "John";
console.log(accountingDepartment.getName);
AccountingDepartment.getFiscalYear();
accountingDepartment.show();

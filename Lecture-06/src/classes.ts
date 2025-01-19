//! Basic Class

// class Department {
//   name: string;
//   constructor(n: string) {
//     this.name = n;
//   }
//   describe(this: Department) {
//     return `Department Name: ${this.name}`;
//   }
// }

// const accounting = new Department("Accounting");

// console.log(accounting.describe()); // Department Name: Accounting

// const accountingCopy = {
//   name: "HR",
//   describe: accounting.describe,
// };

// console.log(accountingCopy.describe()); // Department Name: HR

//! Access Modifiers
class Department {
  //   name: string;
  //   private employees: string[];

  // shorthand
  constructor(public name: string, private employees: string[]) {
    // this.name = n;
    // this.employees = [];
  }
  describe(this: Department) {
    return `Department Name: ${this.name}`;
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printeEmployee() {
    console.log(`Number of employees: ${this.employees.length}`);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting", []);
console.log(accounting.describe()); // Department Name: Accounting
accounting.addEmployee("Mohit");
accounting.addEmployee("Ayushi");
accounting.printeEmployee(); // Number of employees: 2

// console.log(accounting.employees);

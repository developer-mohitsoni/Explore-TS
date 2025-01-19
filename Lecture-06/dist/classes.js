"use strict";
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
// class Department {
//   //   name: string;
//   //   private employees: string[];
//   // shorthand
//   constructor(public name: string, private employees: string[]) {
//     // this.name = n;
//     // this.employees = [];
//   }
//   describe(this: Department) {
//     return `Department Name: ${this.name}`;
//   }
//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }
//   printeEmployee() {
//     console.log(`Number of employees: ${this.employees.length}`);
//     console.log(this.employees);
//   }
// }
// const accounting = new Department("Accounting", []);
// console.log(accounting.describe()); // Department Name: Accounting
// accounting.addEmployee("Mohit");
// accounting.addEmployee("Ayushi");
// accounting.printeEmployee(); // Number of employees: 2
// console.log(accounting.employees);
//! readonly
// class Department {
//   public name: string;
//   private employees: string[];
//   private readonly id: string;
//   constructor(n: string) {
//     this.name = n;
//     this.id = "d1"; // only once you can initialize
//     this.employees = [];
//   }
//   describe(this: Department) {
//     return `Department Name: ${this.name}`;
//   }
//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }
//   printeEmployee() {
//     console.log(`Number of employees: ${this.employees.length}`);
//     console.log(this.employees);
//   }
// }
//! Inheritance
class Department {
    constructor(id, n) {
        this.name = n;
        this.id = id; // only once you can initialize
        this.employees = [];
    }
    describe() {
        return `Department Name: ${this.name} and Id: ${this.id}`;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printeEmployee() {
        console.log(`Number of employees: ${this.employees.length}`);
        console.log(this.employees);
    }
}
class AccountingDepartment extends Department {
    //   reports: string[] = [];
    constructor(id, reports = []) {
        super(id, "Accounting");
        this.reports = reports;
    }
    addReports(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const accountingDep = new AccountingDepartment("d1", []);
accountingDep.addReports("Bugs");
accountingDep.printReports();

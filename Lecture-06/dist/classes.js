"use strict";
//! Basic Class
class Department {
    constructor(n) {
        this.name = n;
    }
    describe() {
        return `Department Name: ${this.name}`;
    }
}
const accounting = new Department("Accounting");
console.log(accounting.describe()); // Department Name: Accounting
const accountingCopy = {
    name: "HR",
    describe: accounting.describe,
};
console.log(accountingCopy.describe()); // Department Name: HR

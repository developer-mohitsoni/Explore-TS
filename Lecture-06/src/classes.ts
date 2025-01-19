//! Basic Class

class Department {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
  describe(this: Department) {
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

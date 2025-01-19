function add(num1: number, num2: number) {
  if (typeof num1 === "number" && typeof num2 === "number") return num1 + num2;
  else {
    throw new Error("Both inputs must be numbers");
  }
}

const result = add(5, 10);
console.log(result);

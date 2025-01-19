function add(num1: number, num2: number, printResult: boolean) {
  const result = num1 + num2;
  if (printResult) {
    return result;
  }
}

const result = add(5, 10, true);
console.log(result);

function add(num1: number, num2: number, printResult: boolean) {
  const result = num1 + num2;
  if (printResult) {
    console.log(`The sum is: ${result}`);
  }
  return result;
}

const result = add(5, 10, true);
console.log(result);

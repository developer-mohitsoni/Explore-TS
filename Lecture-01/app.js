function add(num1, num2, printResult) {
    var result = num1 + num2;
    if (printResult) {
        console.log("The sum is: ".concat(result));
    }
    return result;
}
var result = add(5, 10, true);
console.log(result);

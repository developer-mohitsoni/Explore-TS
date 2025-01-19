function add(num1, num2, printResult) {
    var result = num1 + num2;
    if (printResult) {
        return result;
    }
}
var result = add(5, 10, true);
console.log(result);

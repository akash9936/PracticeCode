let data = 4;
let result = 1;
function factorial(value) {
    if (value > 0) {
        result = result * value;
        factorial(value - 1);
    }
}

factorial(data);
console.log(`Result is ${result}`)
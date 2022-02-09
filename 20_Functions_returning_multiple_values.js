function calculator(num1, num2) {
    var addition = num1 + num2;
    var subtraction = num1 - num2;
    var multiplication = num1 * num2;
    var quotient = num1 / num2;
    return [addition, subtraction, multiplication, quotient]
}

var x = 100;
var y = 5;


var result = calculator(x, y)

console.log(typeof result)


console.log(result[0])
console.log(result[1])
console.log(result[2])
console.log(result[3])

console.log("  ")

for (i = 0; i < 4; i++) {
    console.log(result[i])
}
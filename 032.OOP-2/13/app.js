// Реализуйте класс Calculator, который будет содержать метод doSqrt,
// возвращающий корень числа принимаемого в параметрах.

class Calculator {
    doSqrt(value) {
        const sqrt = Math.sqrt(value);
        return sqrt;
    }
}

const calculator = new Calculator(5);
console.log(calculator.doSqrt(9));
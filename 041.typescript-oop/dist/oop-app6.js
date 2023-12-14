// 6. Создайте класс Calculator, который содержит методы add() (сложение), subtract()
// (вычитание), multiply() (умножение) и divide() (деление). Создайте экземпляр
// класса Calculator и выполните несколько операций.
// class Calculator {
//     add(a: number, b: number) {
//         return a + b;
//     };
//     subtract(a: number, b: number) {
//         return a - b;
//     };
//     multiply(a: number, b: number) {
//         return a * b;
//     };
//     divide(a: number, b: number) {
//         return a / b;
//     };
// }
// const calculator = new Calculator();
// console.log(calculator.add(5, 5));
// console.log(calculator.subtract(5, 5));
// console.log(calculator.multiply(5, 5));
// console.log(calculator.divide(5, 5));
// class Calculator {
//     a: number;
//     b: number;
//     constructor(a: number, b: number) {
//         this.a = a;
//         this.b = b;
//     }
//     add() {
//         return this.a + this.b;
//     };
//     subtract() {
//         return this.a - this.b;
//     };
//     multiply() {
//         return this.a * this.b;
//     };
//     divide() {
//         return this.a / this.b;
//     };
// }
// const calculator = new Calculator(5,5);
// console.log(calculator.add());
// console.log(calculator.subtract());
// console.log(calculator.multiply());
// console.log(calculator.divide());
class Calculator {
    a;
    b;
    add() {
        return this.a + this.b;
    }
    ;
    subtract() {
        return this.a - this.b;
    }
    ;
    multiply() {
        return this.a * this.b;
    }
    ;
    divide() {
        return this.a / this.b;
    }
    ;
}
const calculator = new Calculator();
calculator.a = 10;
calculator.b = 10;
console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());
console.log(calculator.divide());

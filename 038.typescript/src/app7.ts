// 7. Напишите программу, которая находит факториал заданного числа num и
// выводит результат в консоль.

//1
let num_ber: number = +prompt("Введите значение");

let rez: number = 1;
for (let i = 1; i <= num_ber; i++) {
  rez *= i;
}

console.log(rez);

//2
function factorial(num_ber: number) {
  if (num_ber <= 1) return 1;
  return num_ber * factorial(num_ber - 1);
}

console.log(factorial(num_ber));
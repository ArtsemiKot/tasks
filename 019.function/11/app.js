// 11. На входе число. Необходимо создать функцию, возвращающую факториал числа
// 4! = 1 * 2 * 3 * 4

const n = 6;

function facktorial(a) {
  let sum = 1;
  for (let i = 1; i <= a; i++) {
    sum *= i;
  }
  return sum;
}

const result = facktorial(n);
console.log(result);
// Пользователь вводит n – порядковый номер числа из ряда Фибоначчи.
// Реализуйте функцию на поиск числа n в данной последовательности используя
// рекурсию
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, …
// 5 -> 5
// 10 -> 55
// 7 -> 13

const num = 10;
function fibon(n) {
    if (n == 0 || n == 1) return n;
    return fibon(n - 1) + fibon(n - 2);
}

const result = fibon(num)
console.log(result);
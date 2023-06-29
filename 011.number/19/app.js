// Даны три числа a, b, c. Напишите программу, которая находит корни квадратного
// уравнения
// ax**2 + bx + c = 0
// Если уравнение имеет два корня, то следует вывести их в порядке возрастания.

let a = +prompt('Введите a');
let b = +prompt('Введите b');
let c = +prompt('Введите c');
let d = b ** 2 - 4 * a * c;

if (d > 0 && a != 0) {
    console.log('x1', (-b - Math.sqrt(d)) / (2 * a));
    console.log('x2', (b - Math.sqrt(d)) / (2 * a));
} else if (d == 0 && a != 0) {
    console.log('x', (-b / (2 * a)));
} else if (d < 0 && a != 0) {
    console.log('Нет корней');
}else{
    console.log('Нет решения');
}
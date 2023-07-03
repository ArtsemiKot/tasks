// Найти максимальное число из 2 введенных (2 способа)

let a = +prompt('Введите число');
let b = +prompt('Введите число');

if (a > b) {
    console.log('Максимальное:', a);
} else {
    console.log('Максимальное:', b);
}

a > b ? console.log('Максимальное:', a) : console.log('Максимальное:', b);

console.log('Максимальное:', Math.max(a, b));
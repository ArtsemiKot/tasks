// Найти квадратный корень числа. Если же число без плавающей точки, то просто
// вывести его. В противном случае необходимо округлить число до целых. Добавить
// проверку на ввод только чисел

let a = prompt('Введите число');

if (isNaN(a)) {
    console.log('Не число, повторите ввод');
} else {
    a = Number(a);
    let b = Math.sqrt(a);
    if (Number.isInteger(b)) {
        console.log(b);
    } else {
        console.log(Math.round(b));
    }
}
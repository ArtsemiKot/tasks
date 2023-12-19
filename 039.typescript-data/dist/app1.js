// 1. Создайте массив чисел и найдите сумму всех нечетных элементов в массиве.
const array1 = [1, 2, 3, 4, 5];
let sum = 0;
const new_array1 = array1.filter(function (el) {
    if (el % 2 != 0)
        return sum += el;
});
console.log(sum);

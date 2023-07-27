// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 2 функции. Первая для формирования массива.
// Вторая для нахождения количества элементов массива

const n = prompt('Введите количество элементов массива');

const arr = [];

function fullarray(a, new_array) {
    for (let i = 0; i < a; i++) {
        let new_arr = prompt('Введите значение массива');
        new_array.push(new_arr)
    }
    return new_array;
}
const result = fullarray(n, arr)
console.log(result);

let sum =0;
function kolEl(b,c) {
    for (i = 0; i < b.length; i++) {
        c++
    }
    return c
}

const result_2 = kolEl(result,sum)

console.log(`Количество элементов массива ${result_2}`);
// На входе динамичный массив; число n с клавиатуры. Необходимо написать
// функцию, возвращающую элементы массива, которые больше указанного числа.
// [1, 9, 45, 11, 10], 10 -> 45, 11

const n = +prompt('Введите число');

const arr = [1, 9, 45, 11, 10];

function elBig(array) {
    let new_arr = []
    for (let i = 0; i<array.length; i++) {
        if (array[i] > n) {
            new_arr.push(array[i])
        }
    }
    return new_arr
}
const result = elBig(arr)
console.log(result);
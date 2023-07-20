// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите произведение всех элементов массива.
// Проверки на ввод только чисел. Использовать forEach, reduce

const n = prompt('Введите элемент массива');

let arr = [];

for (let i = 0; i < n; i++) {
    let element = prompt();
    if (!isNaN(element)) {
        arr.push(element);
    }
}
let result = 1;
arr.forEach(function (el) {
    result *= el;
})
console.log(result);


// const n = prompt('Введите элемент массива');

// let arr = [];

// const result = arr.reduce(function (sum, el) {
//     if (!isNaN(el)) {
//         return sum * el;
//     } else {
//         return false;
//     }
// }, 1)
// console.log(result);
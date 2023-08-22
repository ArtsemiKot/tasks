// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите сумму всех элементов массива. Проверки на
// ввод только чисел. Использовать forEach, reduce

const n = prompt('Введите элемент массива');

let arr = [];

for (let i = 0; i < n; i++) {
    let a = prompt('элемент массива');
    !isNaN(a) ? arr.push(a) : null;
}

let result = 0;
arr.forEach(function (el) {
    result += +el;
});
console.log(result);


// let result = arr.reduce(function (sum, el) {
//   return sum + +el;
// }, 0);
// console.log(result);
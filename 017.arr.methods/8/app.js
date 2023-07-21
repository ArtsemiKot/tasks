// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Если все элементы массива – числа, то вывести логическое
// true, в противном случае false. Every, forEach

const n = prompt('Введите количество элементов массива');

let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt('Введите элемент массива'));
}

let new_arr = [];

arr.forEach(function (el) {
    !isNaN(el) ? new_arr.push(el) : null;
});
console.log(arr.length == new_arr.length ? true : false);

// const result = arr.every(function (el) {
//   return !isNaN(el) ? true : false;
// });
// console.log(result);
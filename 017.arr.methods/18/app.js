// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив, где каждый элемент
// возведен в квадрат. map

const n = prompt();
let arr = [];

for (let i = 0; i < n; i++) {
    let a = prompt();
    arr.push(a);
}

let new_arr = arr.map(function (el) {
    return el ** 2
})

console.log(new_arr);
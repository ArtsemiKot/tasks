// На входе n – количество элементов массива. Далее производится заполнение
// массива arr с клавиатуры. Также в памяти есть статичная переменная со
// значением javascript. Необходимо создать новый массив из отфильтрованных
// значений, где строка массива arr включают значение переменной javascript.
// Проверка на ввод только текстовых значений на заполнение массива. forEach

// const n = prompt('Введите количество элементов массива');

// let arr = [];
// let str = 'javascript';
// for (let i = 0; i < n; i++) {
//     let el = prompt();
//     if (isNaN(el)) {
//         arr.push(el)
//     }
// }
// let new_arr = [];
// arr.forEach(function (el) {
//     if (el.includes(str)) {
//         new_arr.push(el)
//     }
// })
// console.log(new_arr);


const n = prompt('Введите количество элементов массива');

let arr = [];
let str = 'javascript';
for (let i = 0; i < n; i++) {
    let el = prompt();
    if (isNaN(el)) {
        arr.push(el)
    }
}
let new_arr = arr.filter(function (el) {
    if (el.includes(str)) {
       return true;
    }else{
        return false;
    }
})
console.log(new_arr);
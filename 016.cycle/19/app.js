// Пользователь вводит число, явдяющееся количеством элементов будущего
// массива. Напишите код заполнения массива методом prompt. Проверить каждый
// prompt на число (ввод строки, проверка на isNaN)

const a = +prompt('введите число');

let arr = [];

for (let i = 0; i < a; i++) {
    let elem = prompt();
    if (!isNaN(elem)) {
        arr.push(elem);
    }
}
console.log(arr);
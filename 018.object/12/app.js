// На входе пустой объект, массив, n – количество элементов массива. Далее
// производится заполнение массива с клавиатуры. Добавить в объект ключ “sum”,
// значение – сумма элементов массива(reduce). Добавить проверки на ввод чисел

let obj = {}
let arr = [];
const n = prompt('Введите количество элементов массива');
for (let i = 0; i < n; i++) {
    let a = prompt();
    if(!isNaN(a))
    arr.push(+a)
}

let result = arr.reduce(function (sum, el) {
    return sum + el;
}, 0)

obj.sum = result;
console.log(obj)
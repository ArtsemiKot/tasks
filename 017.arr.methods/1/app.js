// На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// заполяет массив. Далее необходимо создать массив только из чисел. Если длина
// массива равна 0, то вывести ‘Массив пуст’. filter

const a = 5;
let arr = [];

for (let i = 0; i < a; i++) {
    arr.push(prompt())
}

const new_arr = arr.filter(function (el) {
    if (el == Number(el)) {
        return true
    } else {
        return false
    }
})

console.log(new_arr.length === 0 ? 'Массив пуст' : new_arr);
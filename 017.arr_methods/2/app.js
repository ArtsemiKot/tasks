// На входе 7 чисел. Все эти значения пользователь вводит с клавиатуры и заполяет
// 5 первыми значениями массив. Далее необходимо создать массив из тех
// значений, которые являются числами и НЕ равны 2 другим введенным. Если
// длина массива равна 0, то вывести ‘Массив пуст’. Добавить проверку на ввод
// только чисел после каждого введенного элемента. forEach


const a = 7;
let arr = [];
let num_1 = prompt();
let num_2 = prompt();

for (let i = 0; i < a - 2; i++) {
    arr.push(prompt())
}
let result = [];
arr.forEach(function (el) {
    if (!isNaN(el) && el !== num_1 && el !== num_2) {
        result.push(el);
    }
})
console.log(result.length === 0 ? 'Массив пуст' : result);
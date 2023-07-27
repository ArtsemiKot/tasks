// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Напишите функцию, которая принимает массив строк и
// находим там наибольшее по длине текстовое значение. Добавить проверки

const n = +prompt('Введите количество элементов массива');

let arr = [];

function fullarr(array) {
    for (i = 0; i < n; i++) {
        let new_arr = prompt('Введите значение массива'); {
            if (isNaN(new_arr)) {
                array.push(new_arr)
            }
        }
    }
    return array
}

let result = fullarr(arr)
console.log(result)

function maxlenght(arr) {
    let max = arr[0]
    for (i = 0; i < arr.lenght; i++) {
        if (arr[i].lenght > max.lenght) {
            max = arr[i]
        }
    }
    return max
}
const maxarr = maxlenght(result)
console.log(`Самое длинное значение ${maxarr}`)
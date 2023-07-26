// На входе массив. Необходимо создать функцию проверки на то что в массиве
// только числа. Функция возвращает true, если в массиве только числа и false в
// противном случае

const arr = [1, 3, 'hello', [1, 2, 3]];

function istrue(a) {
    let result = a.every(function (el) {
        if (!isNaN(el)) {
            return true
        } else {
            return false
        }
    })
    return result;
}

let result = istrue(arr)

console.log(result);
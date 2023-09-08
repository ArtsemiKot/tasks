// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать функцию возвращающую новый
// массив из отфильтрованных значений, где строка начинается на [a, h].
// [“ann”, “school”, “hschool”, “borabora”] -> [“ann”, “hschool”]

const n = 5;

function doArr(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(prompt('введите что-то'))
    }
    return arr;
}

const result = doArr(n);

function doFilterArr(result) {
    const new_arr = result.filter((el) => el[0] === 'a' || el[0] === 'h');
    return new_arr;
}
const new_result = doFilterArr(result);
console.log(new_result);
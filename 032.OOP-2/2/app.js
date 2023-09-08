// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать функцию возвращающую новый
// массив из элементов, каждое значение которого имеет вид #name.
// [“hschool”, “company”] -> [“#hschool”, “#company”]

const n = 5;

function doArr(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(prompt('введите что-то'));
    }
    return arr;
}

const result = doArr(n);

function doNewArr(result) {
    const new_arr = result.map((el) => '#' + el);
    return new_arr;
}

const new_result = doNewArr(result);
console.log(new_result);
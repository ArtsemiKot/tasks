// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения только четных элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// массив с четными элементами массива

const arr = [1, 2, 3, 4, 5];

function chislo(a) {
    let num_arr = a.every(function (el) {
        return !isNaN(el) ? true : false;
    });
    return num_arr;
}
const result = chislo(arr);

if (result == true) {
    function sum(b) {
        let sum_array = b.map(function (el) {
            if (el % 2 == 0) {
                return el
            }
        });
        return sum_array
    }

    let result_sum = sum(arr)
    console.log(result_sum)
} else {
    console.log('error not a number')
}
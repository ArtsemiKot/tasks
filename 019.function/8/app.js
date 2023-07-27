// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только строки. Вторая для получения суммы всех строчных элементов массива.
// Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую конкатенацию всех строчных элементов массива

const arr = ['i', 'am', 'developer'];

function chislo(a) {
    let num_arr = a.every(function (el) {
        return isNaN(el) ? true : false;
    });
    return num_arr;
}
const result = chislo(arr);

if (result == true) {
    function sum(b) {
        let sum_array = ''
        b.forEach(function (el) {
            sum_array += el
        });
        return sum_array
    }

    let result_sum = sum(arr)
    console.log(result_sum)
} else {
    console.log('error not a string')
}
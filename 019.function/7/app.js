// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения суммы всех элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// сумму всех элементов массива

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
        let sum_array = b.reduce(function (sum, el) {
            sum += el
            return sum
        },0);
        return sum_array
    }

    let result_sum = sum(arr)
    console.log(result_sum)
}else{
    console.log('error not a number')
}
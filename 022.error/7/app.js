// Реализуйте функцию, которая принимает число и возвращает возвенную в
// квадрат каждую цифру числа соединяя их. Добавить проверки
// 9119 -> 811181 (92 === 81, 12=== 1)

const num = '9119';

function doBigNum(num) {
    try {
        if (isNaN(num)) throw new Error('Вы ввели не тот тип данных')
        let arr = num.split('');
        const res = arr.map((el) => el ** 2)
        return res.join('');
    } catch (error) {
        return error.message;
    }
}
const result = doBigNum(num);
console.log(result);
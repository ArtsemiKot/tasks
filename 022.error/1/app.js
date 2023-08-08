// На входе значение. Необходимо его обработать. Если это число и оно не является
// четным, бросить исключение

const n = prompt('Введите значение');

function value(n) {
    try {
        if (isNaN(n)) throw new Error('Введено не число');
        if (n % 2 != 0) throw new Error('Не четное')
        return true;
    } catch (error) {
        return error.message;
    }
}
const result = value(n);
console.log(result);

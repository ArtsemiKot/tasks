// На вход подается строка в виде числа. Необходимо написать регулярное
// выражение. Если строка состоит только из чисел, то вывести булевое true, в
// противном случае бросить исключение и обработать

const str = '123';

function doregylar(str) {
    try {
        if (!/^[0-9]+$/g.test(str)) {
            throw new Error('не подходит')
        }
        return true;
    } catch (error) {
        return error.message;
    }
}

const result = doregylar(str);
console.log(result);
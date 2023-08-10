// На вход подается строка в виде электронной почты пользователя. Необходимо
// найти в данной почте “@”. Если же есть, то вывести булевое true, в противном
// случае бросить исключение и его обработать

const str = 'developer@mail.ru';
function checkpass(str) {
    try {
        if (!str.includes('@')) throw new Error('Неверная почта')
        return true
    } catch (error) {
        return error.message;
    }
}
const result = checkpass(str);
console.log(result);
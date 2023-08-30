// 9. Реализуйте класс Validator. У него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или нет. Если является
// - возвращает true, если не является - то false.
// Дополнить класс Validator. Добавить метод isURL для проверки на url.

class Validator {
    isEmail(email) {
        try {
            if (!/^[a-zA-Z0-9_\.\-]+@[a-z0-9]+\.[a-z]{1,3}$/g.test(email))
                throw new Error("Введена неправильно электронная почта");
            return true;
        } catch (error) {
            return error.message;
        }
    }
    isUrl(url) {
        try {
            if (!/^(https|http):\/\/[a-z0-9]+\.[a-z]{2,4}$/g.test(url)) {
                throw new Error('Ошибка')
            }
            return true;
        } catch (error) {
            return error.message;
        }
    }
}

const validator = new Validator();
const email = "a.kot@a1.by";
const url = 'https://github.com';

console.log(validator.isEmail(email));
console.log(validator.isUrl(url));
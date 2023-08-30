// 10. Реализуйте класс Validator. У него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или нет. Если является
// - возвращает true, если не является - то false.
// Дополнить класс Validator. Добавить метод isURL для проверки на url.
// Дополнить класс Validator. Добавить метод isDate для проверки на дату.

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
                throw new Error('URL введен неверно')
            }
            return true;
        } catch (error) {
            return error.message;
        }
    }
    isData(data) {
        try {
            if (!/^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/g.test(data))
                throw new Error("Дата введена неверно");
            return true;
        } catch (error) {
            return error.message;
        }
    }
}

const validator = new Validator();
const email = 'a.kot@a1.by';
const url = 'https://github.com';
const data = '01.01.2023';

console.log(validator.isEmail(email));
console.log(validator.isUrl(url));
console.log(validator.isData(data));


// Разработчик запушил в главную ветку GitHub jsфайл с многострочными комментариями (/* */). 
// Предстоящее демо гарантирует демонстрацию экрана с кодом проделанной работы за спринт. 
// Программисту необходимо вырезать все комментарии в коде новым коммитом. 
// Задача: вырезать куски кода комментариев используя регулярные выражения воизбежание публичного стыда. 

const str = `/*
Для объявления переменной и присвоения ей
значения можно использовать не две строки:
let myInt
myInt = 4,
а одну:
*/
let myInt = 4`;

function doDelete(str) {
    try {
        let newStr = str.replaceAll(/^[\/*а-яА-Я\s\W]+$/gm, '');
        return newStr;
    } catch (error) {
        return error;
    }
}

const result = doDelete(str);
console.log(result);
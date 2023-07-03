// Пользователь вводит строку. Необходимо повторить ее трижды

let a = prompt('Введите текст');

console.log(isNaN(a) ? a.repeat(3) : false);
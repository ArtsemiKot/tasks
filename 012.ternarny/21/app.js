// Пользователь вводит строку. Применить метод для разбития строки на массив.
// Добавить проверку на ввод только текста

let a =prompt('Введите текст');

console.log(isNaN(a) ? a.split(''): false);
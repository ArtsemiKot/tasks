// Ввести строку. Проверить является ли это число или строка. Если число, то
// ошибка ввода. Если это строка то первый символ поставить в верхний регистр.
// Убрать лишние пробелы

let a = prompt('Введите текст').trim();

if (!isNaN(a)) {
    console.log('Ошибка ввода');
} else {
    console.log(a[0].toUpperCase() + a.slice(1));
}

console.log(!isNaN(a) ? 'Ошибка ввода' : a[0].toUpperCase() + a.slice(1));
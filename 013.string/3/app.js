// Ввести строку. Проверить на isNaN. Если число, то ошибка ввода. Если это строка
// то узнать какая у нее длина. Привести к одному регистру, убрать лишние пробелы

let a=prompt('Введите текст').trim().toUpperCase();

if(!isNaN(a)){
    console.log('Ошибка');
}else{
    console.log(a.length);
}

console.log(!isNaN(a)? 'Ошибка': a.length);
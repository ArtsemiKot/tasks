// Ввести строку. Если эта равна “hschool”, вывести true. В противном случае false.
// Добавить проверки для строк. Удалить лишние пробелы

let a = prompt('Введите строку').trim().toLowerCase();

if(isNaN(a) && a==='hschool'.trim().toLowerCase()){
        console.log(true);
}else{
    console.log(false);
}
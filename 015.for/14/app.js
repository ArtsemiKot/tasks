// На вход число. Необходимо вывести все числа от 1 до введенного числа. Добавить
// проверку вводимого значения, если это текст –> сообщение об ошибке

let a = prompt('Введите число');

if (isNaN(a)) {
    console.log('Ошибка, введите число');
} else {
    for (i = 1; i <= a; i++) {
        console.log(i);
    }
}
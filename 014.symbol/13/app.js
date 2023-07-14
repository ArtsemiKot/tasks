// На вход подается строка. Необходимо сложить все элементы числа. Добавить
// проверку на ввод только чисел
// 53 -> 8
// 135 -> 9

let a = prompt('Введите строку');
if (isNaN(a)) {
    console.log(false);
} else {
    rezult = 0;
    for (let i = 0; i < a.length; i++) {
        rezult += +a[i];
    }
    console.log(rezult);
}

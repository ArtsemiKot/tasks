// Пользователь вводит одно число. Необходимо вывести обратное ему (число
//     является обратным при 1/x). Если при этом введённое с клавиатуры число – ноль,
//     то вывести «Обратного числа не существует». Добавить проверку на ввод только
//     чисел

const a = prompt('Введите число');

if (isNaN(a)) {
    console.log('Ошибка ввода данных');
}
else {
    if (a != 0) {
        console.log(`Ваше обратно число ${1 / a}`);
    } else if (a == 0) {
        console.log('Обратное число отсутсвтует');
    }
}

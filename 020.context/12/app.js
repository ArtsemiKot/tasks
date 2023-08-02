// Работа с замыканием. Напишите функцию, каждый вызов который будет
// генерировать случайные числа от 1 до 100.

function doRundom() {
    return function () {
        console.log(Math.floor(Math.random() * 100));
    }
}

let result = doRundom();
result();
result();
result();
result();
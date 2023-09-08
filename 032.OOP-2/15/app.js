// Полиморфизм. Реализуйте класс NumberArray. NumberArray хранит функцию
// multArr, которая заполняет и возвращает массив из 5 рандомных элементов. Класс
// ConsoleArray является производным по отношению к базовому, родительскому
// NumberArray и содержит функцию multArr. Необходимо переопределить multArr
// из базового класса записав в переменную используя метод super. Далее посчитать
// произведение всех элементов массива используя reduce

class NumberArray {
    multArr() {
        const arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(Math.floor(Math.random() * 10));
        }
        return arr;
    }
}

class ConsoleArray extends NumberArray {
    multArr() {
        const func = super.multArr();
        const result = func.reduce((res, el) => res * el, 1)
        console.log(func);
        console.log(result);;
    }
}

const consoleArray = new ConsoleArray();
consoleArray.multArr();
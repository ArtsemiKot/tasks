// Реализуйте класс NumberArray. NumberArray хранит функцию sumArr, которая
// заполняет и возвращает массив из 5 рандомных элементов. Класс ConsoleArray
// является производным по отношению к базовому, родительскому NumberArray и
// содержит функцию sumArr. Необходимо переопределить sumArr из базового
// класса записав в переменную используя метод super. Далее посчитать сумму всех
// элементов массива

class NumberArray {
    sumArr() {
        const arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(Math.floor(Math.random() * 10));
        }
        return arr;
    }
}

class ConsoleArray extends NumberArray {
    sumArr() {
        const new_arr = super.sumArr();
        console.log(new_arr);
        const result = new_arr.reduce(function (sum, el) {
            return sum + el;
        }, 0)
        console.log(result);
    }
}

const consoleArray = new ConsoleArray();
consoleArray.sumArr();

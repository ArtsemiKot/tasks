// Реализуйте класс MathСalculation. В него передается число n – количество
// элементов массива. На основании числа формируется динамический массив из n
// элементов внутри класса. Создать функцию для подсчета всех четных чисел
// массива. Добавить проверки на ввод

class MathСalculation {
    constructor(n) {
        this.n = n;
    }
    count() {
        const arr = [];
        for (let i = 1; i < this.n; i++) {
            arr.push(Math.floor(Math.random() * 10));
        }
        const new_arr = arr.filter((el) => el % 2 == 0);
        return `${arr}, Четные числа(количество): ${new_arr.length}`;
    }
}

const mathCalculation = new MathСalculation(10);
const result = mathCalculation.count();
console.log(result);
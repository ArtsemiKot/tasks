//У вас есть массив строковых значений почт.
//Необходимо вывести значения массива без дубликатов. Добавить проверки на тип данных, почту
const arr8 = ["kot@mail.com", "kotan@mail.by", "ankot@mail.com"];
function test8(arr8) {
    try {
        isValid(arr8);
        let newArr8 = [];
        for (let i = 0; i < arr8.length; i++) {
            if (!newArr8.includes(arr8[i])) {
                newArr8.push(arr8[i]);
            }
        }
        return newArr8;
    }
    catch (error) {
        return error.message;
    }
}
function isValid(arr8) {
    if (!Array.isArray(arr8))
        throw new Error("Неверный тип данных");
    if (!arr8.every((el) => /^[a-zA-Z09]+@[a-z]+\.[a-z]{2,5}$/gm.test(el)))
        throw new Error("Неверный ввод почты");
}
console.log(test8(arr8));

// На вход подается число n – количество элементов массива. Необходимо
// заполнить массив случайными элементами. Если значение массива находится в
// диапазоне 10<n< 100, то занести в новый массив. Добавить проверки и обработать
// их. Обратите внимание, тут как минимум 3 функции. Первая: формирование
// массива. Вторая: валидация. Третья: основная логика задачи


const n = 10;

function fullArray(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 150))
    }
    return arr;
}

function doChek(arr) {
    try {
        for (let i = 0; i < arr.length; i++) {
            if (isNaN(arr[i])) throw new Error('В массиве не только числа')
        }
    } catch (error) {
        return error.message;
    }
}

function doArray(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10 && arr[i] < 100) {
            array.push(arr[i]);
        }
    }
    return array;
}
const result_1 = fullArray(n);
const result_2 = doChek(result_1);
const result_3 = doArray(result_1)
console.log(result_1);
console.log(result_3);
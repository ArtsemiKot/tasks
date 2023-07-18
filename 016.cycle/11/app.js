// У вас есть массив из строк, чисел и иных примитивов. Необходимо создать новый
// массив, заполненный только числами первоначального массива

const arr = ['a', 1, true, 'b', [1, 2, 3], 2, 3];

let arr_new = [];

for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
        arr_new.push(arr[i]);
    }
}
console.log(arr_new);
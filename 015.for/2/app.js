// Дан статичный массив элементов. С помощью цикла for найдите произведение
// всех элементов массива

let arr = [2, 2, 3];

sum = 1;

for (let i = 0; i < arr.length; i++) {
    sum *= arr[i];
}
console.log(sum);



let arr1 = ['2', '2', '3'];

sum1 = 1;

for (let i = 0; i < arr1.length; i++) {
    sum1 *= Number(arr1[i]);
}
console.log(sum);
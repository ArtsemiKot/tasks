// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for of найдите сумму
// элементов этого массива

const arr = [1, 2, 3, 4, 5];
result = 0;
// for(let i=0; i<arr.length; i++){
//     result+=arr[i];
// }
// console.log(result);

// for (let elem of arr) {
//     result += elem;
// }
// console.log(result);
let i = 0;
do {
    result += arr[i];
    i++;
} while (i < arr[i])
console.log(result)
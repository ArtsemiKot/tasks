// Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только
// те числа из массива, которые начинаются на цифру 1, 2 или 5 -> 10, 20, 50, 235

const arr = [10, 20, 30, 50, 235, 3000];

let result_arr = [];

for (let i = 0; i < arr.length; i++) {
    arr[i] = String(arr[i]);
    if (arr[i][0] == 1 || arr[i][0] == 2 || arr[i][0] == 5) {
        result_arr.push(+arr[i])
    }
}
console.log(result_arr);
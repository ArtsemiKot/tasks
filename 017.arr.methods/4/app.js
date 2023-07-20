// Заполнять массив числами бесконечно до тех пор, пока длина массива не будет
// равна 5. Вывести массив в консоль (цикл for, while)

let arr = [];

for (i = 0; i < Infinity; i++) {
    arr.push(+prompt());
    if (arr.length == 5) {
        break;
    }
}
console.log(arr);

let arr_1 = [];
let n = 0;
while (n < Infinity) {
    arr_1.push(+prompt());
    if (arr_1.length == 5) {
        break;
    }
    n++;
}
console.log(arr_1);
// На входе 10 элементов. Из элементов составить 2 массива по 5 элементов. Далее
// необходимо сравнить массивы. Если они идентичны, то вывести булевое true, в
// противном случае false


const n = 10;

let arr_1 = [];
let arr_2 = [];

for (let i = 0; i < n; i++) {
    if (i < 5) {
        arr_1.push(prompt());
    } else {
        arr_2.push(prompt());
    }
}
if (arr_1 === arr_2) {
    console.log(true);
} else {
    console.log(false);
}

// . На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Значения могут быть строкового либо числового типа
// данных. Необходимо из этих элементов составить 2 массива: со строками и второй
// массив, соответственно, с числами. forEach

const n = prompt('Введите количество элементов');
let arr_str = [];
let arr_num = [];
for (let i = 0; i < n; i++) {
  let a = prompt('Введите значение массива');
  isNaN(a) ? arr_str.push(a) : arr_num.push(a);
}
console.log(arr_str);
console.log(arr_num);
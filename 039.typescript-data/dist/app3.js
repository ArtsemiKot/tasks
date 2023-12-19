// 3. На входе динамичный массив чисел. Используя reduce выведите сумму чисел
// массива
let array3 = [1, 2, 3, 4, 5, 6];
const new_array3 = array3.reduce((sum, el) => sum + el, 0);
console.log(new_array3);

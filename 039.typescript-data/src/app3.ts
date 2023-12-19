// 3. На входе динамичный массив чисел. Используя reduce выведите сумму чисел
// массива

let array3: number[] = [1, 2, 3, 4, 5, 6];

const new_array3 = array3.reduce((sum: number, el: number) => sum + el, 0)
console.log(new_array3);

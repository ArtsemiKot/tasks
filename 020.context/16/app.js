// Вычислите сумму массива чисел статичного массива используя рекурсию

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

function sumarray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumarray(arr.slice(1));
}
const result = sumarray(arr);
console.log(result);
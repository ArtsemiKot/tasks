// Вычислите сумму массива целых(положительные) чисел статичного массива
// используя рекурсию

const arr = [-0.21, 0, 1, 2, -4, 5.4, 6, -7];

function isvalid(arr) {
    let res = arr.filter(function (el) {
        if (el > 0 && el == Math.round(el)) return true
    })
    return res
}
function dosum(arr) {
    if (arr.length == 1) return arr[0];
    return arr[0] + dosum(arr.slice(1));
}
const valid = isvalid(arr); //[1,2,6]
const result = dosum(valid);
console.log(result)
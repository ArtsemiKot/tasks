// На входе объект и число n, символизирующее количество пар ключ-значение.
// Ключи и значения - автоинкремент (генерируется автоматически от 1 до n).
// Проверить есть ли ключ 10 в объекте.

const n = 15;

function doObj(n) {
    const obj = {};
    for (let i = 1; i < n; i++) {
        obj[i] = i;
    }
    return obj;
}

function chekKey(obj) {
    const array_keys = Object.keys(obj);
    const key = array_keys.some(function (el) {
        if (el == 10) return true
    })
    return key;
}

const resdoObj = doObj(n);
const result = chekKey(resdoObj);
console.log(result);
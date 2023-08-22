// На входе объект и число n, символизирующее количество пар ключ-значение.
// Ключи - автоинкремент (генерируется автоматически от 1 до n). Значение каждого
// ключа – рандомное число от 1 до 100. Вывести каждое значение объекта с
// помощью values

const n = 10;

function doObj(n) {
    const obj = {};
    for (let i = 1; i < n; i++) {
        obj[i] = Math.floor(Math.random() * 100);
    }
    return obj;
}

function chekKey(obj) {
    const array_keys = Object.values(obj);
    for (let i = 0; i < array_keys.length; i++) {
        console.log(array_keys[i])
    }
}

const resdoObj = doObj(n);
const result = chekKey(resdoObj);

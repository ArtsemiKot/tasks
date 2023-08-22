// На входе объект. Ключи и значения - автоинкремент (генерируется автоматически
//     от 1 до n). Написать функцию на поиск в объекте только четных ключей.

const n = 5;
const obj = {

};

function doObj(n) {
    for (let i = 0; i < n; i++) {
        obj[i] = i;
    }
    return obj;
}

function findEven(obj) {
    const even = Object.keys(obj);
    let res = even.filter(function (el) {
        if (el % 2 == 0)
            return true;
    })
    return res;
}

let result = doObj(n);
let chek = findEven(result);
console.log(chek);
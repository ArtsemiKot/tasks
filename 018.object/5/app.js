// На входе статичный объект. Необходимо сформировать массив из всех нечетных
// ключей объекта

const obj = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6
}
const arr = [];
for (let key in obj) {
    if (key % 2 != 0) {
        arr.push(key);
    }
}
console.log(arr);
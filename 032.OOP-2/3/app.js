// Написать функцию на подсчет количества пар ключ значение в объекте. Добавить
// проверки
const obj = {
    name: 'Artsemi',
    age: 25,
    second_name: 'Kot',
}

function doCountObj(obj) {
    let count = 0;
    for (let key in obj) {
        if (obj[key]) {
            count++
    }
    return count;
}
}
const result = doCountObj(obj);
console.log(result);

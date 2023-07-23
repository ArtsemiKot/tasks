// На входе статичный объект. Необходимо посчитать количество пар (ключ:
//     значение) где значение число и вывести количество

const obj = {
    name: 'Artsemi',
    age: 25,
    second_name: 'Kot',
    weight: 75,
    height: 180
}
let count=0;
for (let key in obj) {
    if (!isNaN(obj[key])) {
        count++
    }
}
console.log(count);
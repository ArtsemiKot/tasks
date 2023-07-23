// На входе статичный объект. Необходимо посчитать количество пар (ключ:
//     значение)

const obj = {
    name: 'Artsemi',
    age: 25,
    second_name: 'Kot',
}

let count=0;
for (let key in obj) {
    if (obj[key]) {
        count++
    }
}
console.log(count);
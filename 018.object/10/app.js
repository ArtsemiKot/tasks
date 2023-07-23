// На входе статичный объект, включающий такие ключи как name, age, birthday,
// значения ключей – пустые строки. Считать данные с клавиатуры и заполнить
// объект соответствующими данными. Добавить проверки на ввод

const obj = {
    name: 'Artsemi',
    age: 25,
    second_name: 'Kot',
    birthday: ''
}
for (let key in obj) {
    let a = prompt(`Введите значение ${key}`)
    obj[key]=a;
}
console.log(obj);
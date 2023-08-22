// Написать функцию на подсчет количества пар ключ значение в объекте. Добавить
// проверки

const obj = {
    id: 'email',
    name: 'a.kot@a1.by',
    age: 18
}

function doCountObj(obj) {
    try {
        const value = Object.entries(obj).length;
        if (value == 0) throw new Error('Ошибка. Объект пустой')
        return value;
    } catch (error) {
        return error.message;
    }
}

const result = doCountObj(obj);
console.log(result);
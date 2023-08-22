// На входе статичный объект и строка str. Написать функцию на поиск в объекте
// значения str. Values

const obj = {
    id: 'email',
    name: 'a.kot@a1.by',
    age: 18
}

const str = 'fl';

function searchObj(obj, str) {
    try {
        const value = Object.values(obj);
        if (!value.includes(str)) throw new Error('Ошибка. Объект пустой или не содержит искомое значение');
        if (value.includes(str)) {
            return true
        } else {
            return false
        }
    } catch (error) {
        return error.message;
    }
}

const result = searchObj(obj, str);
console.log(result);
// На входе статичный объект. Написать функцию на формирование массива
// значений данного объекта

const obj = {
    name: 'artsemi',
    surname: 'kot',
    smile: 'awesome'
};

function doArr(obj) {
    const arr = Object.values(obj)
    return arr;
}

const result = doArr(obj);
console.log(result);
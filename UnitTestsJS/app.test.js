// 1. Написать функцию которая принимает 2 числа и возводит 1 во 2 степень.
// Добавить необходимые проверки.
// Написать тест для функции

function doPow(a, b) {
    if(typeof a === 'string' || typeof b === 'string') return false
    return a ** b
}

describe('test do Pow Function', ()=>{
    test('test to be success', ()=>{
        const result = doPow(2,2)
        expect(result).toBe(4)
    })

    test('test to be false', ()=>{
        const result = doPow('a','b')
        expect(result).toBeFalsy()
    })
})

// 2. Написать функцию которая принимает 2 числа и возвращает результат
// произведения 2 множителей. Добавить необходимые проверки.
// Написать тест для функции

function doComposition(a, b) {
    if (typeof a != 'number' || typeof b != 'number') return false
    if(!a || !b) return false
    return a * b
}
describe('test do Composition Function', () => {
    test('test to be success', () => {
        const result = doComposition(2, 2)
        expect(result).toBe(4)
    })

    test('test to be False', () => {
        const result = doComposition('a', 'b')
        expect(result).toBeFalsy()
    })

    test('test to be False', () => {
        const result = doComposition()
        expect(result).toBeFalsy()
    })
})


// 3. Написать функцию которая принимает массив чисел и находит сумму всех
// элементов. Добавить необходимые проверки.
// Написать тест для функции

function doSum(arr) {
    if (!arr.length) return false
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) return false
        sum += arr[i]
    }
    return sum;
}

describe('test doSum Function', () => {
    const arr = [1, 2, 3, 4, 5];
    test('test to be success', () => {
        const result = doSum(arr);
        expect(result).toBe(15)
    })
    test('test to be False', () => {
        const result = doSum([]);
        expect(result).toBeFalsy();
    })

    test('test to be False', () => {
        const result = doSum(['a', 'b', 'c']);
        expect(result).toBeFalsy()
    })
})

// 4. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары, количество которых больше 10 и произведены в Германии
// Написать тест для функции

function chekArr(arr) {
    const result = arr.filter((el) => el.count > 10 && el.producer == 'Германия')
    if(!result.length) return false
    return result
}

describe('test chekArr Function', () => {
    const arr = [{ id: 1, title: 'Часы', count: 10, price: 500, producer: 'Германия' },
    { id: 2, title: 'Смартфон', count: 33, price: 1500, producer: 'Германия' },
    { id: 3, title: 'Моноблок', count: 6, price: 2200, producer: 'Германия' },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000, producer: 'Китай' },
    { id: 5, title: 'Планшет', count: 22, price: 2100, producer: 'Китай' },
    { id: 6, title: 'Телевизор', count: 4, price: 4100, producer: 'Германия' },
    { id: 7, title: 'Холодильник', count: 11, price: 2400, producer: 'Германия' }]
    test('to have length', () => {
        const result = chekArr(arr);
        expect(result).toHaveLength(2)
    })
    test('toEqual', () => {
        const result = chekArr(arr);
        const equal = [
            { id: 2, title: 'Смартфон', count: 33, price: 1500, producer: 'Германия' },
            { id: 7, title: 'Холодильник', count: 11, price: 2400, producer: 'Германия' }]
        expect(result).toEqual(equal);
    })
        test('test to be False', () => {
        const result = chekArr([]);
        expect(result).toBeFalsy();
    })
})


// 5. У вас есть массив строковых значений, состоящий из номеров телефонов.
// Необходимо вывести значения массива без дубликатов. Добавить необходимые
// проверки.
// Написать тест для функции

function chekUniq(arr) {
    const uniq = [];
    for (i = 0; i < arr.length; i++) {
        if (!uniq.includes(arr[i])) uniq.push(arr[i])
    }
    if (!uniq.length) return false
    return uniq
}

describe('test chekUniq Function', () => {
    const arr = ['375447596882', '375447596883', '375447596882']
    test('to have length', () => {
        const result = chekUniq(arr);
        expect(result).toHaveLength(2)
    })
    test('test to Equal', () => {
        const result = chekUniq(arr);
        const equal = ['375447596882', '375447596883']
        expect(result).toEqual(equal);
    })
    test('to have arr', () => {
        const result = chekUniq([]);
        expect(result).toBeFalsy()
    })
})

// 6. На входе статичный объект. Необходимо посчитать количество пар (ключ:
// значение) где значение число и вывести количество. Добавить необходимые
// проверки.
// Написать тест для функции
// 7. На входе статичный объект. Необходимо числовые значения удвоить на выходе.
// Написать тест для функции
// 8. На входе статичный объект. Необходимо сформировать массив из всх четных
// значений объекта.
// Написать тест для функции
// 9. На входе статичный массив [1, 2, 3, 4, 5, 6] и динамическое значение n. Необходимо
// разбить данный одномерный массив на маленькие массивы в зависимости от
// того, какого число ввел пользователь. Добавить необходимые проверки.
// 1 -> [[1], [2], [3], [4], [5], [6]]
// 2 -> [[1, 2], [3, 4], [5, 6]]
// 3 -> [[1, 2, 3], [4, 5, 6]]
// 4 -> [[1, 2, 3, 4], [5, 6]
// 5 -> [[1, 2, 3, 4, 5], [6]]
// 6 -> [[1, 2, 3, 4, 5, 6]]
// Написать тест для функции
// 10. Реализуйте функцию, которая принимает в качестве параметра строку и
// возвращает массив без каких-либо элементов с одинаковым значением рядом
// друг с другом.
// Написать тест для функции
// 'AAAABBBCCDAABBB -> ['A', 'B', 'C', 'D', 'A', 'B’]
// 'ABBCcAD’ -> ['A', 'B', 'C', 'c', 'A', 'D’]
// '12233’ -> [1, 2, 3]
// Написать тест для функции
// [ { id: 1, title: 'Часы', count: 10, price: 500, producer: 'Германия' },
// { id: 2, title: 'Смартфон', count: 33, price: 1500 , producer: 'Германия' },
// { id: 3, title: 'Моноблок', count: 6, price: 2200, producer: 'Германия' },
// { id: 4, title: 'Ноутбук', count: 13, price: 3000, producer: 'Китай' },
// { id: 5, title: 'Планшет', count: 22, price: 2100, producer: 'Китай' },
// { id: 6, title: 'Телевизор', count: 4, price: 4100, producer: 'Германия' },
// { id: 7, title: 'Холодильник', count: 11, price: 2400, producer: 'Германия' } ]
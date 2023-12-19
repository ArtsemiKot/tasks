// 2. Создайте массив строк и выведите на экран все элементы, которые содержат
// букву 'a'.
const array2 = ['avada', 'avadakedavra', 'hello', 'yo', 'hi', 'cat'];
const new_array2 = array2.filter(function (el) {
    if (el.includes('a')) {
        return el;
    }
});
console.log(new_array2);

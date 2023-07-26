// Напишите функцию, которая принимает статичный массив строк. Необходимо
// отфильтровать значения и оставить только те, где длина строк до 2 символов.
// [“by”, “belarus”, “de”, “ru”, “germany”] -> [“by”, “de”, “ru”]

const arr = ['by', 'belarus', 'de', 'ru', 'germany'];
function dofilter(arr){
    let new_arr = arr.filter(function (el) {
        if (el.length <= 2) {
            return true
        }
    })
    return new_arr
}
const result = dofilter(arr)
console.log(result);

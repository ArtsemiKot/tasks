// 5. Создайте массив чисел и найдите в нем все числа, которые делятся на 3 и не
// делятся на 2.
const array5 = [1, 2, 3, 4, 5, 6];
const new_array5 = array5.filter(function (el) {
    if (el % 3 === 0 && el % 2 != 0) {
        return el;
    }
});
console.log(new_array5);

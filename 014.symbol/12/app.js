// На вход программе подается строковое значение. Если значение больше 2-х и
// меньше 11-ти или больше или равна 26-ти и меньше 30-ти, то выведите 'Верно', в
// противном случае выведите 'Неверно'.

let str = prompt('Введите значение');

if (isNaN(str)) {
    console.log('Введите число');
} else if ((str > 2 && str < 11) || (str >= 26 && str < 30)){
    console.log('Верно')
}else {
    console.log('Неверно');
}
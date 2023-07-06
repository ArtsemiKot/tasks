// Найдите квадратный корень числа. Результат округлите до целых, десятых, сотых.

let a = prompt('Введите число');

if(isNaN(a)){
    console.log(false);
}else{
    console.log(Math.sqrt(a).toFixed(0));
    console.log(Math.sqrt(a).toFixed(1));
    console.log(Math.sqrt(a).toFixed(2));
}
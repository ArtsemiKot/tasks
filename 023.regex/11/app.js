// преобразовать число вида строки "1 000 000 000" в число с помощью регулярного выражения

const number = '1 000 000 000';

const newNumber = +number.replaceAll(/\s/g, '');

console.log(typeof (newNumber), newNumber);
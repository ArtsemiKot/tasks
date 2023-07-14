// На вход подаются 2 строки. Необходимо найти в 1 строке 2 подстроку и вывести
// true, если совпадение есть, в противном случае false

let str_one = prompt('Введите строку');

let str_two = prompt('Введите 2 строку');

console.log(str_one.includes(str_two) ? true : false);
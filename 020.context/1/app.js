// На входе число n. Напишите функцию, которая переворачивает число.

const num = '150';

function doreverce(str){
return str.split('').reverse().join('');
}

const result = doreverce(num)
console.log(result)
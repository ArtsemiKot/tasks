// Задача на слово палиндром. Если слово одинаковое с 2 сторон, то true, в
// противном случае false
// мем -> true
// тест -> false

let str = prompt('');
if(str === str.split('').reverse().join('')){
    console.log(true);
}else{
    console.log(false);
}
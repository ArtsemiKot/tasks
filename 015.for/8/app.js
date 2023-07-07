// Преобразуйте первую букву каждого слова строки в верхний регистр.

let str = 'i am developer'.split(' ');

let str1 = '';

for (let i = 0; i < str.length; i++) {
    str1 += str[i][0].toUpperCase() + str[i].slice(1) + ' ';

}
console.log(str1);
// На вход программе подается строка текста, состоящая из слов, разделенных
// ровно одним пробелом. Напишите программу, которая подсчитывает количество
// слов в ней

let str = 'I am developer'.split(' ');
rezult = '';
for (i = 0; i < str.length; i++) {
    if (str[i] != ' ') {
        rezult++;
    }
}
console.log(rezult);
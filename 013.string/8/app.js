// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb'

let a = 'aaa bbb ccc';
let firstindex = a.indexOf('b');
let lastindex = a.lastIndexOf('b');
console.log(a.slice(firstindex, lastindex + 1));
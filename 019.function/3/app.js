// Напишите функцию, которая принимает строку в маленьком регистре и
// возаращает строку, где каждое слово начинается с большого регистра
// hschool company -> Hschool Company

const str = 'hschool company'.split(' ');

function douppercase(string) {
    let new_str = '';
    for (let i = 0; i < string.length; i++) {
        new_str += string[i][0].toUpperCase() + string[i].slice(1) + ' ';
    }
    return new_str
}
let result = douppercase(str)

console.log(result);


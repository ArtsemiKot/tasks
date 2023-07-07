// Задача на анаграмму. На входе 2 строки, необходимо выявить являются ли
// введенные значения анаграммами

let str1 = 'липа';
let str2 = 'пила';

console.log(str1.split('').sort().join(''));

console.log(str2.split('').sort().join(''));

if (str1.split('').sort().join('') === str2.split('').sort().join('')){
    console.log('анаграмма');
}else{
    console.log('не анаграмма');
}
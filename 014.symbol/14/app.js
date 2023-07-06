// На вход подается строка в виде электронной почты. Если строка содержит “@” и
// оканчивается на .com, .ru, то вывести true, иначе false

let str = prompt('Введите url');

console.log(str.includes('@') && (str.includes('.com') || str.includes('.ru')) ? true : false);
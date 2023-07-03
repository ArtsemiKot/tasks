// На вход программе подаётся строка. Замените все @ на '!' (2 способа)

let a = prompt('Введите строку');

if (isNaN(a)) {
    console.log(a.replaceAll('@', '!'));
} else {
    console.log('Ошибка');
}

console.log(isNaN(a) ? a.replaceAll('@', '!') : 'Ошибка');

console.log(isNaN(a) ? a.split('@').join('!') : 'Ошибка');
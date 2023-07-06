// Пользователь вводит строку. Необходимо посчитать количество гласных

let str = prompt('Введите строку');
rezult = '';
for (i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'o' || str[i] === 'i' || str[i] === 'y' || str[i] === 'u') {
        rezult ++;
    }
}
console.log(rezult);
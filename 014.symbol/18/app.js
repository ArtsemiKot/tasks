// На вход программе подается строка. Напишите программу, которая меняет
// регистр символов, другими словами замените все строчные символы заглавными
// и наоборот.
// Swap Case => sWAP cASE

let str = 'Swap Case';

let str1 = '';

for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()){
        str1 += str[i].toUpperCase()
    }else {
        str1 += str[i].toLowerCase();
    }
}
console.log(str1);

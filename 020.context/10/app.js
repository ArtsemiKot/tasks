// Напишите функцию, которая принимает два параметра: предложение из
// нескольких слов и букву. Функция должна подсчитывать количество вхождений
// указанной буквы в строке. Добавить проверки

const str1 = "i am developer";
const str2 = "e";

function letter(str1, str2) {
    let count = 0;
    if (isNaN(str1) && isNaN(str2)) {
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] == str2) {
                count++
            }
        }
    } else {
        console.log('необходимо слово');
    }
    return count;
}

const result = letter(str1, str2);
console.log('Букв в строке -', result);
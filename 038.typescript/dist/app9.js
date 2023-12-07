// 9. Напишите программу, которая принимает строку и возвращает новую строку, в
// которой все символы уникальны (не повторяются). Например, для строки "hello"
// результатом должна быть строка "helo".
const string = "hello";
let result = '';
for (let i = 0; i < string.length; i++) {
    result.includes(string[i]) ? null : result += string[i];
}
console.log(result);

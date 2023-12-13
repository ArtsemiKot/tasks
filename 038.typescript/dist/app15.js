// 15. Напишите программу, которая принимает строку и возвращает новую строку, в
// которой каждое слово заменено на последнюю букву этого слова, а все остальные
// символы остаются без изменений.
// "Hello World" -> "o d“
const arr = "Hello JS Developer".split(" ");
let resulting = [];
for (let i = 0; i < arr.length; i++) {
    resulting.push(arr[i][arr[i].length - 1]);
}
console.log(resulting.join(' '));

//13.Создайте переменную sentence и присвойте ей строковое значение предложения. Напишите программу, которая преобразует первую
//букву каждого слова в предложении в верхний регистр. Например, для предложения "hello world" результатом должна быть строка "Hello World".
const sentence = "hello world".split(" ");
let array = [];
for (let i = 0; i < sentence.length; i++) {
    array.push(sentence[i][0].toUpperCase() + sentence[i].slice(1).toLowerCase());
}
console.log(array.join(" "));

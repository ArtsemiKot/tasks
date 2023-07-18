// Дано предложение и количество раз которое его надо повторить. Напишите
// программу, которая повторяет данное предложение нужное количество раз.

// const str = 'I am developer';
// const rep = 3;
// for (let i = 0; i < str.length; i++) {
//     i < rep ? console.log(str) : null;
// }

const str = 'I am developer';
const rep = 3;
// for (let i = 0; i < rep; i++) {
//     console.log(str)
// }

let i = 0;
while (i < rep) {
    console.log(str);
    i++;
}
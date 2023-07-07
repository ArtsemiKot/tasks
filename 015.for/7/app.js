// Преобразуйте первую букву строки в верхний регистр несколькими способами

let str = 'i am developer'.toLowerCase();

for (let i = 0; i < str.length; i++) {
    if (i === 0) {
        console.log(str[i].toUpperCase() + str.slice(1));
    }
}

console.log(str[0].toUpperCase()+str.slice(1));


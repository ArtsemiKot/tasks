// Дано число 7, найдите все числа кратные 7 до 100

const a = 7;

for (let i = 0; i < 100; i++) {
    i % a == 0 ? console.log(i) : null;
}
// Напишите программу, в которой рассчитывается сумма и произведение цифр
// положительного трёхзначного числа
// 123 -> Сумма цифр = 6 Произведение цифр = 6

let a = prompt('Введите трехзначное число');

if (a > 99 && a < 1000) {
    console.log(Number(a[0]) + Number(a[1]) + Number(a[2]));
    console.log(Number(a[0]) * Number(a[1]) * Number(a[2]));
}
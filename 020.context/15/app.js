// Вычислить факториал числа используя рекурсию

function factorial(f) {
    if (f<=1) return 1;
    return f*factorial(f-1);
}
console.log(factorial(5));
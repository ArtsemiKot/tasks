//12.Создайте переменную str и присвойте ей строковое значение. Используя цикл while, замените все гласные символы в строке на символ *.
let stri_ng = "developer";
let stf = "aeiouy";
let i = 0;
while (i < stf.length) {
    if (stri_ng.includes(stf[i])) {
        stri_ng = stri_ng.replaceAll(stf[i], "*");
    }
    i++;
}
console.log(stri_ng);

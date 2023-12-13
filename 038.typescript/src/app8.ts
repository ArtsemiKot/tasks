// 8. Создайте переменную str и присвойте ей строковое значение. Используя цикл for,
// выведите каждый второй символ строки.

let str_ing: string[] = "i am developer".split(" ");

let res = [];
for (let i = 0; i < str_ing.length; i++) {
  res.push(str_ing[i].slice(1,2));
}

console.log(res.join(" "));
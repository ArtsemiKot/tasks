//11.Создайте переменную str и присвойте ей строковое значение. Используя цикл for выведите каждый символ строки и его индекс.

const string_value: string = "hello";

for (let i = 0; i < string_value.length; i++) {
  console.log(string_value[i] + " " + i);
}
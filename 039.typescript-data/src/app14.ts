// 14. Напишите программу, которая находит и выводит наиболее часто встречающийся
// символ в заданной строке.

const str14: string = "aaaaaaassssddddddff";

let res14: string = "";

let maxCount: number = 0;

let count14: number = 0;

for (let i = 0; i < str14.length; i++) {
  count14 = 0;
  for (let j = 0; j < str14.length; j++) {
    if (str14[i] == str14[j]) count14++;
    if (count14 > maxCount) {
      maxCount = count14;
      res14 = str14[i];
    }
  }
}

console.log(
  `наиболее часто встречающийся символ в заданной строке ${res14}, колличество вхождений ${maxCount}`
);
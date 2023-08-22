// На входе задан массив [‘hschool’, ‘hschool_0’, ‘hschool_1’]. Напишите все возможные
// способы обращения к первому и последнему элементам

const arr = ['hschool', 'hschool_0', 'hschool_1'];

console.log(arr[0], arr[2]);

const result = arr.filter(function (el) {
    return el == 'hschool' || el == 'hschool_1' ? true : false
})
console.log(result.join(' '))

let res = [];
for (let i = 0; i < arr.length; i++) {
  i == 0 || i == arr.length - 1 ? res.push(arr[i]) : null;
}
console.log(res.join(' '));
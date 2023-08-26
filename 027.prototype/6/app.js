// На входе объект. Ключи и значения - автоинкремент (генерируется автоматически
//     от 1 до n). Необходимо отобразить на экране объект (помните, что окно браузера
//     не воспринимает объекты как тип данных JavaScript. Для отображения неоходимо
//     преобразовать строку в ...)

const n = 5;
const obj = {};
const div = document.querySelector('div');
function doObj(n) {
    for (let i = 0; i < n; i++) {
        obj[i] = i;
    }
    return obj;
}
div.addEventListener()
let result = doObj(n);
alert(JSON.stringify(result));
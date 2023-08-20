// Вывести в строчку все вводимые значения через инпут
// в виде массива. Добавить проверку, что поле не пустое


const btn = document.querySelector('button');
let arr = [];

function isValid(inp) {
    if (!inp) throw new Error('Пустое поле ввода');
}

btn.addEventListener('click', function () {
    try {
        const inp = document.querySelector('input');
        const paragraf = document.querySelector('p');
        isValid(inp.value);
        arr.push(inp.value);
        paragraf.innerHTML = arr;
        inp.value = '';
    } catch (error) {
        alert(error.message);
    }
});
// Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку
// необходимо получить значение из инпута. Проверить, что это число > 0, а также,
// добавить проверку на ввод только чисел. Если проверка true, то вывести в div
// удвоенное значение инпута

const btn = document.querySelector('button');
function isValid(inp) {
    if (isNaN(inp)) throw new Error('Это не число');
    if (inp <= 0) throw new Error('значение меньше 0');
}
btn.addEventListener('click', function () {
    const inp = document.querySelector('input');
    const div = document.querySelector('div');
    try {
        isValid(inp.value);
        div.innerHTML = inp.value * 2;

    } catch (error) {
        alert(error.message);
    }
})

// Записать в результат удвоенное значение инпута. Добавить проверки

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    try {
        const inp = document.querySelector('input');
        if (!inp.value) throw new Error('Строка ввода пустая')
        const div = document.querySelector('div');
        if (!isNaN(inp.value)) {
            div.innerHTML = `Результат: ${inp.value * 2}`;
        } else {
            alert('Введите число');
        }
    } catch (error) {
        alert(error.message);
    }
})
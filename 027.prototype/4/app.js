// По условию задачи даны инпут и кнопка. Необходимо преобразовать строку в
// CamelCase (примерСтрокиВCamelCase )

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    const inp = document.querySelector('input');
    const res = document.querySelector('div');

    const arr = inp.value.split(' ');
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    res.innerHTML = str;
})
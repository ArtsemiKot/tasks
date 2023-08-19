// По двойному клику на кнопку изменять цвет кнопки

const btn = document.querySelector('button');

let flag = false;

btn.addEventListener('dblclick', () => {
    if (flag === false) {
        btn.style = 'background-color:red';
        flag = true;
    } else {
        btn.style = 'background-color:white';
        flag = false;
    }
})
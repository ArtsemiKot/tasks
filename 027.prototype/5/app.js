// По условию задачи даны 2 инпута и кнопка. Необходимо вернуть true, если часть
// символов 1 строки есть в другой.
// 'rkqodlw', 'world‘ – true
// 'kacvtas', 'steak' – false

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    const inp1 = document.querySelector('.first_str');
    const inp2 = document.querySelector('.second_str');
    let str1 = inp1.value;
    let str2 = inp2.value;
    let count = 0;
    for (let i = 0; i < str2.length; i++) {
        if (str1.includes(str2[i])) {
            count ++   
        }
    }
    if (str2.length === count) {
        alert('true')
    }
    else {
        alert('false')
    }
})
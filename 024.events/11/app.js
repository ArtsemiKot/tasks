// По нажатию на кнопку поменять местами значения 2 инпутов. 

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    const inp_1 = document.querySelector('.change1');
    const inp_2 = document.querySelector('.change2');
    let a = inp_1.value;
    let b = inp_2.value;
    inp_1.value = b;
    inp_2.value = a;
})

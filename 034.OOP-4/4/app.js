// 4. Вы вводите строку. Неоходимо проверить является ли эта строка датой и
// соответствует шаблону вида хх-хх-хххх

const btn = document.querySelector('button');
btn.addEventListener('click', ()=>{
    const inp = document.querySelector('input');
    const div = document.querySelector('div');
    
    if(/^[0-9]{2}-[0-9]{2}-[0-9]{4}$/g.test(inp.value)){
        div.innerHTML = 'Строка дата';
    }else{
        div.innerHTML = 'Строка не дата';
    }
})
// 3. Реализуйте класс HTML. Класс содержит методы bindOptionPlus, bindOptionMinus,
// содержащие по 1 обработчику события в каждом из методов. HTML разметка
// содержит: div с первоначальным значением 0 (счетчик), кнопку button с текстом +1,
// кнопку button с текстом -1. Задача:
// • По клику с текстом на кнопку +1 необходимо добавить в счетчик +1.
// • По клику с текстом на кнопку -1 необходимо отнять из счетчика -1.

class HTML {
    div = document.querySelector('div');
    bindOptionPlus() {
        const btn1 = document.querySelector('.button1');
        btn1.addEventListener('click', () => {
            this.div.textContent = +this.div.textContent + 1;
        })
    }
    bindOptionMinus() {
        const btn2 = document.querySelector('.button2');
        btn2.addEventListener('click', () => {
            this.div.textContent = +this.div.textContent - 1;
        })
    }
}

const html = new HTML();
html.bindOptionPlus();
html.bindOptionMinus();
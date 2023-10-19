// Установить пакет npm
// Поставить сервер
// Добавить 3 обработчика маршрута get с url: "/ “, "/about“, "/contact"
// Отправить клиенту ответы по каждому из маршутов
// Изменить функционал роута get “/”. На сервере хранится массив из чисел. Необходимо вернуть клиенту только уникальные значения
// Создать обработчик маршрута get с url: "/:id “. Необходимо получить значение id и отправить клиенту. (Для того чтобы получить значение из url необходимо воспользоваться деструктуризацией из request.params)
// Создать обработчик маршрута get с url: "/:id“. Необходимо получить значение id. На сервере хранится массив из чисел. Напишите функцию, которая разделяет массив на части заданного размера. Необходимо вернуть клиенту массив
// Создать обработчик маршрута get с url: "/task/:id “. Необходимо получить значение id. На сервере хранится массив объектов, в каждом из которых есть поле id int. Напишите функцию, которая находит по id объект. 
// Необходимо вернуть клиенту объект (Вспомнить ServerGetById)

const express = require('express');
const app = express();

app.get('/', (request, response) => {
    const arr = [1, 2, 2, 2, 3, 4, 5, 5, 6, 2];
    const new_arr = []
    for (let i = 0; i < arr.length; i++) {
        if (!new_arr.includes(arr[i])) {
            new_arr.push(arr[i])
        }
    }
    response.send(new_arr)
})

app.get('/:id', (request, response) => {
    const { id } = request.params;
    const arr = [1, 2, 3, 4, 5, 6];
    const new_arr = [];
    let item = [];
    for (let i = 0; i < arr.length; i++) {
        item.push(arr[i]);
        if (item.length == id) {
            new_arr.push(item);
            item = []
        }
    }
    item.length === 0 ? null : new_arr.push(item);
    response.send(new_arr);
})


app.get('/about', (reques, response) => {
    response.send('Hello world!')
})

app.get('/contact', (reques, response) => {
    response.send('Hello!')
})

app.listen(3000, ()=>{
    console.log('Этот север запущен на порт 3000');
});
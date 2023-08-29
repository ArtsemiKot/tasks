// Возле дороги стоят столбы. Расстояние между столбами одинаковое и ширина
// столбов одинаковая. По условию задачи даны 3 инпута и кнопка. По клику на
// кнопку вызывается функция, принимающая три параметра: количество столбов
// (≥ 1); расстояние между столбами (10 – 30 метров); ширина столба (10 – 50
// сантиметров). Рассчитайте расстояние между первым и последним столбом в
// сантиметрах

const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    const count = document.querySelector('.input1');
    const inp1 = document.querySelector('inpu2');
    const inp2h = document.querySelector('.input3');
    const inp3 = document.querySelector('.');

    res.innerHTML = ((count.value - 1) * (distance.value * 100)) + (count.value * width.value);
})
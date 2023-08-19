// Добавьте картинку на страницу. При
// наведении на картинку мышкой необходимо
//  ее изменять на другую картинку.
//   Но как только мышка снова отходит в сторону,
//   то возвращается первая картинка

const image = document.querySelector('.img');

image.addEventListener('mouseover', function () {
    image.style = 'background-image:url(./group.svg)'
})

image.addEventListener('mouseout', function () {
    image.style = 'background-image:url(./2.jpg)'
})
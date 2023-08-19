

const image = document.querySelector('.img');

image.addEventListener('mouseover', function () {
    image.style = 'background-image:url(./group.svg)'
})

image.addEventListener('mouseout', function () {
    image.style = 'background-image:url(./2.jpg)'
})
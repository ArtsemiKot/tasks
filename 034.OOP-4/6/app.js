// При наведении на картинку изменять ее

document.querySelector('img').addEventListener('mouseover', function () {
    this.src = './2.jpg'
})

document.querySelector('img').addEventListener('mouseout', function () {
    this.src = "./1.jpg"
})
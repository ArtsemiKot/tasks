// 9. Необходимо по кнопку включать и выключать песню

const btn = document.querySelector('button');
let flag = false;
btn.addEventListener('click', () => {
    const audio = document.querySelector('audio');
    audio.src = './song.mp3';
    audio.play();
    if (flag == false) {
        audio.play();
        flag = true;
    } else {
        audio.pause();
        flag = false;
    }
})
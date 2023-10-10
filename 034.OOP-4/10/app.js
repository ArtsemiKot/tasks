// 10. Добавить переключение песен

const btnPlay = document.querySelector('.play');
const btnNext = document.querySelector('.next');
const btnBack = document.querySelector('.back');
const audio = document.querySelector('audio');
const artist = document.querySelector('.artist');
const nameOfSong= document.querySelector('.nameOfSong');
const songCover = document.querySelector('.songCover');

let flag = false;
const songs = [
    {
        id: 1, path: './songs/song.mp3', artist: 'sinatra', nameOfSong: 'song1', songCover: 'background-image: url(./assets/1.jpg)'
    },
    {
        id: 2, path: './songs/song1.mp3', artist: '50cent', nameOfSong: 'song2', songCover: 'background-image: url(./assets/2.jpg)'
    },
    {
        id: 3, path: './songs/song2.mp3', artist: 'nickelback', nameOfSong: 'song3', songCover: 'background-image: url(./assets/3.jpg)'
    }
]
let currentIndexSong = 0;

btnPlay.addEventListener('click', function() {
    audio.src = songs[currentIndexSong].path;
    artist.textContent = songs[currentIndexSong].artist;
    nameOfSong.textContent =songs[currentIndexSong].nameOfSong;
    songCover.style = songs[currentIndexSong].songCover;
    if (flag == false) {
        audio.play();
        flag = true;
        btnPlay.style = 'background-image: url(./assets/pause.svg)';
    } else {
        audio.pause();
        flag = false;
        btnPlay.style = 'background-image: url(./assets/playBtn.svg)';
    }
})

btnBack.addEventListener('click', function() {
    if(currentIndexSong==0) return
    currentIndexSong--
    audio.src = songs[currentIndexSong].path;
    artist.textContent = songs[currentIndexSong].artist;
    nameOfSong.textContent =songs[currentIndexSong].nameOfSong;
    songCover.style = songs[currentIndexSong].songCover;
    audio.play();
    flag=true;
    btnPlay.style = 'background-image: url(./assets/pause.svg)';
})

btnNext.addEventListener('click', function() {
    if(currentIndexSong==songs.length-1) return
    currentIndexSong++
    audio.src = songs[currentIndexSong].path;
    artist.textContent = songs[currentIndexSong].artist;
    nameOfSong.textContent =songs[currentIndexSong].nameOfSong;
    songCover.style = songs[currentIndexSong].songCover;
    audio.play();
    flag=true;
    btnPlay.tstyle = 'background-image: url(./assets/pause.svg)';
})
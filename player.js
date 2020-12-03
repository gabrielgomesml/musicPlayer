music_name = 'musics/30 Graus.mp3'
let title = document.querySelector(".title1")
let play_btn = document.querySelector("#play");
let retroc_btn = document.querySelector("#retroceder");
let avanc_btn = document.querySelector("#avancar");
let next_btn = document.querySelector("#proxima");
let prev_btn = document.querySelector("#anterior");
let range = document.querySelector("#range");
let play_img = document.querySelector("#play_img")
let total_time = 0;
let currentTime = 0;
let isPlaying = false;
let musicPosition = 0
let song = new Audio();
window.onload = playSong;

function playSong(){
    var musicas = [
        '30 Graus.mp3',
        'Areia Movedica.mp3',
        'Costumes Iguais.mp3',
        'Deserto da Ilusão.mp3'
    ]
    title.innerHTML = musicas[musicPosition]
    song.src = music_name;
    console.log(song)
    
    
    play_btn.addEventListener('click',function(){
        if(!isPlaying){
            song.play();
            isPlaying = true;
            total_time = song.duration;
            range.max = total_time;
            play_img.src = "images/pausa.svg";
        }else{
            song.pause();
            isPlaying = false;
            play_img.src = "images/play.svg";
        }
       song.addEventListener('ended',function(){
            song.currentTime = 0
            song.pause();
            isPlaying = false;
            range.value = 0;
            play_img.src = "images/play.svg";
        })
        avanc_btn.addEventListener('click', function(){
            song.currentTime = range.value;
            song.currentTime += 10
        })
        retroc_btn.addEventListener('click', function(){
            song.currentTime = range.value;
            song.currentTime -= 10
        })
        next_btn.addEventListener('click', function(){
            if(musicPosition != musicas.length - 1) {
                musicPosition += 1
                song.src = 'musics/' + musicas[musicPosition]
                title.innerHTML = musicas[musicPosition]
                song.play();
                isPlaying = true;
                total_time = song.duration;
                range.max = total_time;
                play_img.src = "images/pausa.svg";
            }
        })
        prev_btn.addEventListener('click', function(){
            if(musicPosition != 0) {
                musicPosition -= 1
                title.innerHTML = musicas[musicPosition]
                song.src = 'musics/' + musicas[musicPosition]
                song.play();
                isPlaying = true;
                total_time = song.duration;
                range.max = total_time;
                play_img.src = "images/pausa.svg";
                
            }
        })
        song.addEventListener('timeupdate',function(){
            range.value = song.currentTime;
        })
        range.addEventListener('change',function(){
            song.currentTime = range.value;
        })
       
    })
}
console.log('Welcome to spotify');

let audioElement = new Audio('/helper/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "It's Always Blue", filePath:"/helper/songs/1.mp3" , coverPath:"/helper/covers/1.jpg" },
    {songName: "Trap", filePath:"/helper/songs/2.mp3" , coverPath:"/helper/covers/2.jpg" },
    {songName: "They Mad", filePath:"/helper/songs/3.mp3" , coverPath:"/helper/covers/3.jpg" },
    {songName: "Plug Walk", filePath:"/helper/songs/4.mp3" , coverPath:"/helper/covers/4.jpg" },
    {songName: "Heroes Tonight", filePath:"/helper/songs/5.mp3" , coverPath:"/helper/covers/5.jpg" },
    {songName: "Heroes Tonight(Instru)", filePath:"/helper/songs/6.mp3" , coverPath:"/helper/covers/6.jpg" },
    {songName: "Back It Up", filePath:"/helper/songs/7.mp3" , coverPath:"/helper/covers/7.jpg" },
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

masterPlay.addEventListener('click', () =>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

let songIndex = 0;
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `/helper/songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

let prev = document.getElementById('previous');
let next = document.getElementById('next');

prev.addEventListener('click',()=>{
    if(songIndex <= 0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = `/helper/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

next.addEventListener('click',()=>{
    if(songIndex >= 6){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `/helper/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
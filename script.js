// initialize variables

let songIndex = 0;
let audioElement = new Audio('./resources/songs/(10).mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');



let songs = [
    {
        songName: "Black Adam",
        filePath: "./resources/songs/(1).mp3",
        coverPath: "https://i1.sndcdn.com/artworks-VEzwQzSZsZ0mlrZ7-BaxvlQ-t40x40.jpg"
    },
    {
        songName: "Boulevard of Broken Dreams",
        filePath: "./resources/songs/(2).mp3",
        coverPath: "./resources/images/2.jpg"
    },
    {
        songName: "CJ Whoopty ERS",
        filePath: "./resources/songs/(3).mp3",
        coverPath: "https://i1.sndcdn.com/artworks-VzHVSDZywHE6HCRt-Fjy1PQ-t40x40.jpg"
    },
    {
        songName: "Dragon Stone",
        filePath: "./resources/songs/(4).mp3",
        coverPath: "https://i1.sndcdn.com/artworks-VEzwQzSZsZ0mlrZ7-BaxvlQ-t40x40.jpg"
    },
    {
        songName: "Black Adam",
        filePath: "./resources/songs/(1).mp3",
        coverPath: "https://i1.sndcdn.com/artworks-VEzwQzSZsZ0mlrZ7-BaxvlQ-t40x40.jpg"
    },
    {
        songName: "Black Adam",
        filePath: "./resources/songs/(1).mp3",
        coverPath: "https://i1.sndcdn.com/artworks-VEzwQzSZsZ0mlrZ7-BaxvlQ-t40x40.jpg"
    },
    {
        songName: "Black Adam",
        filePath: "./resources/songs/(1).mp3",
        coverPath: "https://i1.sndcdn.com/artworks-VEzwQzSZsZ0mlrZ7-BaxvlQ-t40x40.jpg"
    },
    {
        songName: "Black Adam",
        filePath: "./resources/songs/(1).mp3",
        coverPath: "https://i1.sndcdn.com/artworks-VEzwQzSZsZ0mlrZ7-BaxvlQ-t40x40.jpg"
    },
    {
        songName: "Black Adam",
        filePath: "./resources/songs/(9).mp3",
        coverPath: "https://i1.sndcdn.com/artworks-VEzwQzSZsZ0mlrZ7-BaxvlQ-t40x40.jpg"
    },
    {
        songName: "Warriyo - Mortals",
        filePath: "./resources/songs/(10).mp3",
        coverPath: "https://i1.sndcdn.com/artworks-000198582455-ueqgjg-t500x500.jpg"
    }
];

// handle pause/play click
masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});


// listen to events
audioElement.addEventListener('timeupdate', ()=> {
    // update seekbar
    let progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myProgressBar.value = progress;



    if(audioElement.currentTime == audioElement.duration) {
        gif.style.opacity = 0;
    }
});


myProgressBar.addEventListener('change', ()=> {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

// initialize variables

let songIndex = 0;
let audioElement = new Audio('./resources/songs/(10).mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = document.getElementsByClassName('songItem');
let currentPlaying = document.getElementById('currentPlaying');

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
        coverPath: "https://i1.sndcdn.com/artworks-h4j9YQr974vs-0-t40x40.jpg"
    },
    {
        songName: "Hand in Glove",
        filePath: "./resources/songs/(5).mp3",
        coverPath: "./resources/images/LOFI.jpg"
    },
    {
        songName: "Black Blade",
        filePath: "./resources/songs/(6).mp3",
        coverPath: "./resources/images/twosteps.jpg"
    },
    {
        songName: "BlackHeart",
        filePath: "./resources/songs/(7).mp3",
        coverPath: "./resources/images/twosteps.jpg"
    },
    {
        songName: "Riders",
        filePath: "./resources/songs/(8).mp3",
        coverPath: "./resources/images/twosteps.jpg"
    },
    {
        songName: "Cupla - Serenity",
        filePath: "./resources/songs/(9).mp3",
        coverPath: "./resources/images/LOFI.jpg"
    },
    {
        songName: "Warriyo - Mortals",
        filePath: "./resources/songs/(10).mp3",
        coverPath: "https://i1.sndcdn.com/artworks-000198582455-ueqgjg-t500x500.jpg"
    }
];

// The information of the songs could be populated in the HTML page using JS. 


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


// change the song name in the bottom strip on clicking the play icon in songs list.

const makeAllPlay = ()=> {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach(element => {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach(element => {
    element.addEventListener('click', (e)=> {
        // on clicking different song, previous song should have 'play' icon.
        makeAllPlay();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');

        // on clicking a particular song's play icon, the song should change and start from 0.
        // to do this, i need to know which song is clicked on.
        let songNumber = e.target.id;
        songIndex = songNumber[1] - 1;
        console.log(songIndex);
        audioElement.src = `./resources/songs/${songNumber}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        
        currentPlaying.innerText = songs[songIndex].songName;


        gif.style.opacity = 1;
        masterPlay.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');
    })
});


document.getElementById('next').addEventListener('click', ()=> {
    if(songIndex == 9) {
        songIndex = 0;
    }
    songIndex++;
    audioElement.src = `./resources/songs/(${songIndex+1}).mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    
    currentPlaying.innerText = songs[songIndex].songName;

    gif.style.opacity = 1;
    masterPlay.classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-circle-play');    
});


document.getElementById('previous').addEventListener('click', ()=> {
    if(songIndex == 0) {
        songIndex = 0;
    }
    songIndex--;

    audioElement.src = `./resources/songs/(${songIndex+1}).mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    
    currentPlaying.innerText = songs[songIndex].songName;

    gif.style.opacity = 1;
    masterPlay.classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-circle-play');    
});
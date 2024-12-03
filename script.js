const splash = document.querySelector('.splash-screen');

splash.addEventListener('click', () => {
    splash.style.opacity = '0';
    setTimeout(() => {
        splash.style.display = 'none';
    }, 1000);
});

const audio = document.getElementById('bgMusic');
const volumeBtn = document.querySelector('.volume-control');
let isPlaying = false;

const playAudio = () => {
    if (audio.paused) {
        audio.volume = 0.5;
        audio.play()
            .then(() => {
                isPlaying = true;
                volumeBtn.innerHTML = `<path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"/>`;
            })
            .catch(e => console.log("Play failed:", e));
    }
};

document.addEventListener('click', function initAudio() {
    playAudio();
    document.removeEventListener('click', initAudio);
}, { once: true });

volumeBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        volumeBtn.innerHTML = `<path d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z"/>`;
        isPlaying = false;
    } else {
        playAudio();
    }
});

document.querySelector('.search-bar').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

document.querySelector('.search-icon').addEventListener('click', performSearch);

function performSearch() {
    const searchTerm = document.querySelector('.search-bar').value;
    if (searchTerm.trim() !== '') {
        console.log('Searching for:', searchTerm);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const audioElement = document.getElementById('bgMusic');
    const songUrls = [
        "https://api.fabdl.com/spotify/download-mp3/97a92f8a66d210a3a9a5734365bb27f3",
        
    ];

    const randomSong = songUrls[Math.floor(Math.random() * songUrls.length)];
    audioElement.src = randomSong;
    audioElement.play();
}); 

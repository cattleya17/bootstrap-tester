// Audio player

const music = document.querySelector('#fl-audio');
const playBtn = document.querySelector('.audio-play-btn');

const seekBar = document.querySelector('.audio-seekbar');
const currentMusicTime = seekBar.value + '%';
const customThumb = document.getElementById("flAudioThumb");


playBtn.addEventListener('click', () => {

    if(playBtn.className.includes('pause')){
      music.play();
    } else{
      music.pause();
    }
    playBtn.classList.toggle('pause');

})

const getMusicDuration = () => {
  seekBar.value = 0;
  customThumb.style.left = seekBar.value;

  setTimeout (() => {
    seekBar.max = music.duration;
  }, 500);
}

getMusicDuration();

// formatting time in min and seconds format

const formatTime = (time) => {
  let min = Math.floor(time / 60);
  if(min < 10){
      min = `0${min}`;
  }
  let sec = Math.floor(time % 60);
  if(sec < 10){
      sec = `0${sec}`;
  }
  return `${min} : ${sec}`;
}

// seek bar
setInterval(() => {
  seekBar.value = music.currentTime;
  let thumbPosition = ((music.currentTime/music.duration)*100);
  if (music.currentTime > 0) {
    document.getElementById("flAudioThumb").style.left = 'calc('+ thumbPosition + '% + 10px)';
  }
}, 100)

seekBar.addEventListener('change', () => {
  music.currentTime = seekBar.value;
  console.log("seek change");
})

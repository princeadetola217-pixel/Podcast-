const audio = document.getElementById('featuredAudio');
const playBtn = document.getElementById('playBtn');
const progress = document.getElementById('progress');
if(audio){
function playPause() { if(audio.paused) { audio.play(); playBtn.innerText = '⏸️'; } else { audio.pause(); playBtn.innerText = '▶️'; } }
function rewind() { audio.currentTime -= 10; }
function forward() { audio.currentTime += 10; }
function prev() { audio.currentTime = 0; }
function next() { audio.currentTime = audio.duration; }
audio.ontimeupdate = () => { progress.value = (audio.currentTime / audio.duration) * 100 || 0; }
progress.oninput = () => { audio.currentTime = (progress.value / 100) * audio.duration; }
}

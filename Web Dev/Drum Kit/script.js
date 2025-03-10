window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // console.log(audio);
    if(!audio) return;

    audio.pause();
    audio.currentTime = 0;
    audio.play().catch(err => console.log("Playback error:", err));
    // console.log(key);
    key.classList.add('playing');
})

function removeTransition(e) {
    if(e.propertyName != 'transform') return;
    this.classList.remove('playing');
}

const key = document.querySelectorAll('.key'); 
key.forEach(key => key.addEventListener('trasitionend', removeTransition));
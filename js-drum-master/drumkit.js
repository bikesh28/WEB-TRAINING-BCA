const keys = document.querySelectorAll('.key');


window.addEventListener("keydown",function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio){
        return;
    }
    audio.currentTime = 0;
    this.document.querySelector(`.key[data-key="${e.keyCode}"]`).style.transition='.1s ease-in-out';
    this.document.querySelector(`.key[data-key="${e.keyCode}"]`).style.transform='scale(1.3,1.3)';
    audio.play();
});
window.addEventListener("keydown", function(e){
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio){
        return;
    }
    window.setTimeout(function(){
        this.document.querySelector(`.key[data-key="${e.keyCode}"]`).style.border='4px solid black';
        this.document.querySelector(`.key[data-key="${e.keyCode}"]`).style.transform='scale(1,1)';
        }, 200);
        this.document.querySelector(`.key[data-key="${e.keyCode}"]`).style.border='4px solid'+ getRandomColor();   
})

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}
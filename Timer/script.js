const timeleft = document.querySelector('.time-left');
const timerbutton =  document.querySelectorAll('[data-time]');
const ChangeTime = document.querySelector('.end-time')
let timerInterval ;

function timer (seconds){
    const now = Date.now();
    const then = now + seconds * 1000;

    displaytimeleft (seconds);
    displayComebacktime(then)
    timerInterval = setInterval(function(){
        let secondsleft = (then - Date.now()) / 1000;
        secondsleft = Math.round(secondsleft)
        if( secondsleft <= 0){
            clearInterval(timer);
        }
         displaytimeleft(secondsleft)
    }, 1000);

    // console.log(now , then);
}

function displaytimeleft (secondsleft){
    let minutes = Math.floor(secondsleft / 60);
    let seconds = secondsleft % 60;


    if (minutes<10){
       minutes = "0"+ minutes
    }

    if (seconds<10){
        seconds= "0"+ seconds
    }
    console.log(minutes , seconds);
    timeleft.textContent =  minutes + ":" + seconds ;
}

function displayComebacktime(timestamp){
    const date = new Date (timestamp);
    const minutes = date.getMinutes();
    const hours = date.getHours();
    ChangeTime.innerHTML = "Be back in" +" "+ hours+":"+minutes

}



timerbutton.forEach(function(button) {
    button.addEventListener('click',function(event){
        clearInterval(timerInterval);
        const minutes = event.target.getAttribute('data-time');
        const seconds = minutes * 60;
        
        timer(seconds)
    })
    
});

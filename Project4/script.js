const startPause = document.querySelector("#startStopBtn");
const stop = document.querySelector("#stop");

//console.log(timer)

let seconds = 0;
let min = 0;
let hours = 0;


let secZero = 0; // we add this as a placholder to keep the "0" before the timer whebn it has single digit numbers.
let minZero = 0;
let hourZero = 0;

function stopWatch() {

    seconds++;

    if (seconds === 60) {
        secZero = 0;
        seconds = 0;
        min++;

        if (min == 60) {
            minZero = 0;
            min = 0;
            hours++;
        }

    }

    if(seconds > 9) {

         secZero = ''; // removes the 0 placeholder in front
    }

    if (min > 9) {

        minZero = '';
    }

    if (hours > 9) {

        hourZero = '';
    }

   
    document.getElementById('TIMER').innerText =  hourZero.toString() + hours + ":"  + minZero.toString() + min + ":"  + secZero.toString() + seconds;

    
};




let StartTimer = null; // we set this to null otherwise the time rwill run when the window is refreshed if we add the window.setInterval method

let timerStatus = "stopped"; // status needs to be stopped.

startPause.addEventListener("click", e=>{

 if (timerStatus === "stopped") {
    StartTimer = window.setInterval(stopWatch,1000); // here we start the timer
   document.querySelector("#startStopBtn").innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>'
    timerStatus = "started"; // we change it to to started in order to be able to stop it again.


 } else {

   window.clearInterval(StartTimer); // this will stop the timer, we need to add the ID of the interval we want to stop.
   document.querySelector("#startStopBtn").innerHTML = '<i class="fa-solid fa-play" id="play"></i>'
   timerStatus = "stopped"; // we change it to stopped so we can start it again, it almaos like toggling it.

    
 }
      
});

stop.addEventListener("click", e=>{
    clearInterval(StartTimer); // this stops the timer
    secZero = 0;
    minZero = 0;
    hourZero = 0;
    seconds = 0;
    min = 0;
    hours = 0; // resets the values and this is why we declare these values outside of the stopWatch function
    document.querySelector("#startStopBtn").innerHTML = '<i class="fa-solid fa-play" id="play"></i>'
    timerStatus = "stopped";
    document.getElementById('TIMER').innerText = "00:00:00"; // changes the inner text back to default.
    
})





//hours + ":" + min + ":" + seconds;
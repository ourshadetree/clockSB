var checkT = new Date();
const timer = {
    hours: 0,
    minutes: 0,
    seconds: 0
}

window.onload = function() {
    loadClock();
}

document.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-unit][data-direction]");
    if(!btn) return;

    const unit = btn.dataset.unit;
    const direction = btn.dataset.direction;

    if(direction === "up") {
        timer[unit]++;
    } else {
        timer[unit]--;
    } 

});

function clearAllIntervals() {
    for(let i = 1; i < 99999; i++) {
        window.clearInterval(i);
    }
}

function loadClock() {
    clearAllIntervals();
    getTime();
    setInterval(getTime, 1000);
}

function getTime() {
    const currentTime = new Date();
    const minutes = currentTime.getMinutes();
    const hours = currentTime.getHours();
    const seconds = currentTime.getSeconds();

    updateClockScreen({minutes, hours, seconds});
}

function updateClockScreen(timeObj) {
    const amPm = "AM";
    if(timeObj.hours >= 12) {
        amPm = "PM";
    }
    if(timeObj.hours > 12) {
        timeObj.hours = timeObj.hours - 12;
    }

    if(timeObj.minutes < 10) {
        timeObj.minutes = "0" + timeObj.minutes;
    }

    if(timeObj.seconds < 10) {
        timeObj.seconds = "0" + timeObj.seconds;
    }

    let timeNow = timeObj.hours + ":" + timeObj.minutes + ":" + timeObj.seconds + " " + amPm;

    let timeNowDis = document.getElementById("clockScreen");
    timeNowDis.innerHTML = timeNow;
}

function loadSW() {
    clearAllIntervals();
    stopWatch();
}

function loadTimer() {
    clearAllIntervals();
    document.getElementById("clockScreen").innerHTML = "0" + timer.hours + ":0" + timer.minutes + ":0" + timer.seconds;
}

function stopWatch() {
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById("clockScreen").innerHTML = "00:00:00";
}

function start() {
    countUp();
    clearAllIntervals();
    setInterval(countUp, 1000);
}

function end() {
    clearAllIntervals();
}

function countUp() {
    let displayMin;
    let displaySec;
    let displayHour;

    seconds++;

    if(seconds < 10 && seconds != 0) {
        displaySec = "";
        displaySec = "0" + seconds;
    } else if(seconds == 0) {
        displaySec = "";
        displaySec = "00";
    } else {
        displaySec = "";
        displaySec = seconds;
    }
    if(minutes < 10 && minutes != 0) {
        displayMin = "";
        displayMin = "0" + minutes;
    } else if(minutes == 0) {
        displayMin = "";
        displayMin = "00";
    } else {
        displayMin = "";
        displayMin = minutes;
    }
    if(hours < 10 && hours != 0) {
        displayHour = "";
        displayHour = "0" + hours;
    } else if(hours == 0) {
        displayHour = "";
        displayHour = "00";
    } else {
        displayHour = "";
        displayHour = hours;
    }
    if(seconds == 59) {
        seconds = 0;
        minutes++;
    }
    if(minutes == 59) {
        minutes = 0;
        hours++;
    }

    document.getElementById("clockScreen").innerHTML = displayHour + ":" + displayMin + ":" + displaySec;
}



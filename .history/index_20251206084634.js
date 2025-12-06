var checkT = new Date();
var time;
var amPm = "AM";
var seconds;
var minutes;
var hours;

window.onload = function() {
    loadClock();
}

function clearAllIntervals() {
    for(let i = 1; i < 99999; i++) {
        window.clearInterval(i);
    }
}

function loadClock() {
    getTime();
    clearAllIntervals();
    setInterval(getTime, 1000);
}

function getTime() {
    var currentTime = new Date();
    minutes = currentTime.getMinutes();
    hours = currentTime.getHours();
    seconds = currentTime.getSeconds();

    if(hours > 12) {
        amPm = "PM";
    } else {
        amPm = "AM";
    }

    if(hours > 12) {
        hours = hours - 12;
    }

    if(minutes < 10) {
        minutes = "0" + minutes;
    }

    if(seconds < 10) {
        seconds = "0" + seconds;
    }

    let time = hours + ":" + minutes + ":" + seconds + " " + amPm;

    let timeNow = document.getElementById("clockScreen");
    timeNow.innerHTML = time;

}

function loadSW() {
    clearAllIntervals();
    stopWatch();
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



var checkT = new Date();
var time;
var amPm = "AM";
var seconds;
var minutes;
var hours;

window.onload = function() {
    loadClock();
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

function openSW() {
    minutes = 0;
    hours = 0;
    seconds = 0;

    document.getElementById("clockScreen").innerHTML = "00:00:00";
    clearInterval(getTime, 1000);

    
}



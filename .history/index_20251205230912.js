var currentTime = new Date();
var checkT = new Date();
var time;
var amPm = "AM";
var seconds;
var minutes;
var hours;
var checkSeconds;
var checkHours;
var checkMinutes;

window.onload = function() {
    getTime();
}

function getTime() {
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

    time = hours + ":" + minutes + ":" + seconds + " " + amPm;

    console.log(time);
    
    checkTime();

}

function checkTime() {
    checkMinutes = checkT.getMinutes();
    checkHours = checkT.getHours();
    checkSeconds = checkT.getSeconds();

    if(checkSeconds != seconds) {
        getTime();
    }
}



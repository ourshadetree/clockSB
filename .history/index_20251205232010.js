var checkT = new Date();
var time;
var amPm = "AM";
var seconds;
var minutes;
var hours;

window.onload = function() {
    getTime();
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

    time = hours + ":" + minutes + ":" + seconds + " " + amPm;

    document.getElementById("clockScreen").textContent(time);

}



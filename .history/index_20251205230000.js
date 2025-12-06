var currentTime = new Date();
var time;
var amPm;

window.onload = function() {
    getTime();
}

function getTime() {
    minutes = currentTime.getMinutes();
    hours = currentTime.getHours();
    amPm = "AM";

    if(hours > 12) {
        amPm = "PM";
    } else {
        amPm = "AM";
    }

    if(hours > 12) {
        hours = hours - 12;
    }

    time = hours + ":" + minutes + " " + amPM;

    console.log(time);  

}



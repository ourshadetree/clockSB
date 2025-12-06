var currentTime = new Date();
var time;

window.onload = function() {
    getTime();
}

function getTime() {
    minutes = currentTime.getMinutes();
    hours = currentTime.getHours();

    if(hours > 12) {
        hours = hours - 12;
    }

    time = hours + ":" + minutes;

    console.log(time);  

}



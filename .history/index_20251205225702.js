var currentTime = new Date();
var time;

window.onload = function() {
    getTime();
}

function getTime() {
    minutes = currentTime.getMinutes();
    hours = currentTime.getHours();

    time = hours + ":" + minutes;

    console.log(time);  

}



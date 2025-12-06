var currentTime = new Date();

window.onload(getTime());

function getTime() {
    minutes = currentTime.getMinutes();
    hours = currentTime.getHours();

    console.log(minutes);
    console.log(hours);
}


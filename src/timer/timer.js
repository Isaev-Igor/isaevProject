var count = 0;
var minut = 0;
var hours = 0;
var timer = document.querySelector(".timer");
var counter = setInterval(getTimer, 1000);

function getTimer() {
    count++;
    if (count < 10) {
        count = "0" + count;
    }

    if (count > 60) {
        minut++;
        if (minut < 10) minut = "0" + minut;
        return count = 0;
    }

    if (minut > 60) {
        hours++;
        if (hours < 10) {
            hours = "0" + hours;
            return minut = 0;
        }
    }
    timer.innerHTML = `${hours}:${minut}:${count}`;
}


timer.addEventListener("mouseover", stop);
timer.addEventListener("mouseout", start);

function start() {
    counter = setInterval(getTimer, 1000);
}

function stop() {
    clearTimeout(counter);
}


document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (key === "Escape") {
        count = 0;
    }
});


timer.removeEventListener("mouseover", listener, stop);
timer.removeEventListener("mouseout", listener, start);
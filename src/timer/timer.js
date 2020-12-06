const timer = document.querySelector('.timer');
const timerHours = document.querySelector('.timerHours');
const timerMinutes = document.querySelector('.timerMinutes');
const timerSeconds = document.querySelector('.timerSeconds');

let seconds = 0;
let minuts = 0;
let hours = 0;

let counter = setInterval(getTimer, 1000);

function getTimer() {
    seconds++;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (seconds > 59) {
        minuts++;
        if (minuts < 10) minuts = "0" + minuts;
        return seconds = 0;
    }

    if (minuts > 59) {
        hours++;
        if (hours < 10) {
            hours = "0" + hours;
            return minuts = 0;
        }
    }
    timerHours.textContent = `${hours}`;
    timerMinutes.textContent = `${minuts}`;
    timerSeconds.textContent = `${seconds}`;
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
        seconds = 0;
    }
});


timer.removeEventListener("mouseover", listener, stop);
timer.removeEventListener("mouseout", listener, start);
let hours = document.querySelector('.hours') ;
let minutes = document.querySelector('.minutes') ;
let seconds = document.querySelector('.seconds') ;

function time() {
    let date = new Date;
    let h = date.getHours() < 10 ? '0'+ date.getHours() : date.getHours();
    let m = date.getMinutes() < 10 ? '0'+ date.getMinutes() : date.getMinutes();
    let s = date.getSeconds() < 10 ? '0'+ date.getSeconds() : date.getSeconds();

    if(start) {
        hours.innerHTML = `${h}`;
        minutes.innerHTML = `${m}`;
        seconds.innerHTML = `${s}`;
        start = false;
    }

    if(s === 59) {
        minutes.innerHTML = `${m}`;
        seconds.innerHTML = `${s}`;
    }

    if(m === 59) {
        hours.innerHTML = `${h}`;
        minutes.innerHTML = `${m}`;
        seconds.innerHTML = `${s}`;
    }

    seconds.innerHTML = `${s}`;


}
setInterval(time, start = true, 1000);
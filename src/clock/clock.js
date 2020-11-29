function makeTime(event) {
    const hours = document.querySelector('.hours') ;
    const minutes = document.querySelector('.minutes') ;
    const seconds = document.querySelector('.seconds') ;
    const date = new Date;
    const showHours = date.getHours() < 10 ? '0'+ date.getHours() : date.getHours();
    const showMinutes = date.getMinutes() < 10 ? '0'+ date.getMinutes() : date.getMinutes();
    const showSeconds = date.getSeconds() < 10 ? '0'+ date.getSeconds() : date.getSeconds();

    if(start) {
        hours.textContent = `${showHours}`;
        minutes.textContent = `${showMinutes}`;
        seconds.textContent = `${showSeconds}`;
        start = false;
    }

    if(showSeconds === 59) {
        minutes.textContent = `${showMinutes}`;
        seconds.textContent = `${showSeconds}`;
    }

    if(showMinutes === 59) {
        hours.textContent = `${showHours}`;
        minutes.textContent = `${showMinutes}`;
        seconds.textContent = `${showSeconds}`;
    }

    seconds.textContent = `${showSeconds}`;
}

setInterval(makeTime, start = true, 1000);
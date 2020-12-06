const defaults = {
    selectors: {
        red: 'button_first',
        green: 'button_second',
        yellow: 'button_third'
    },
    classes: {
        background_red: 'background_red',
        background_green: 'background_green',
        background_yellow: 'background_yellow'
    },
    dictionary: {
        buttonChange: 'Button Change',
        buttonOriginal: 'Button 3'
    }
}

const wraper = document.querySelector(".color-btn");

wraper.addEventListener('click', handler);

function handler(event) {

    const backgroundRed = defaults.classes.background_red;
    const backgroundGreen = defaults.classes.background_green;
    const backgroundYellow = defaults.classes.background_yellow;
    const newColorRed = defaults.selectors.red;
    const newColorGreen = defaults.selectors.green;
    const newColorYellow = defaults.selectors.yellow;


    if(event.target.classList.contains(newColorRed)) {
        event.target.classList.toggle(backgroundRed);
    }

    if(event.target.classList.contains(newColorGreen)) {
        event.target.classList.toggle(backgroundGreen);
    }

    if(event.target.classList.contains(newColorYellow)) {
        event.target.classList.toggle(backgroundYellow);
    }

}


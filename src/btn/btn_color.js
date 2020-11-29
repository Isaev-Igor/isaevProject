const defaults = {
    selectors: {
        color: 'button_first',
        background: 'button_second',
        text: 'button_change_text'
    },
    classes: {
        new_color: 'new_color',
        background_red: 'background_red'
    },
    dictionary: {
        buttonChange: 'Button Change',
        buttonOriginal: 'Button 3'
    }
}

const wraper = document.querySelector("body");

wraper.addEventListener('click', handler);

function handler(event) {

    const colorCss = defaults.classes.new_color;
    const backgroundCss = defaults.classes.background_red;
    const newBackground = defaults.selectors.background;
    const newColor = defaults.selectors.color;
    const newText = defaults.selectors.text;
    const addButtonOriginal = defaults.dictionary.buttonOriginal;
    const addButtonChange = defaults.dictionary.buttonChange;
    let targetText = event.target.textContent;

    if(event.target.classList.contains(newColor)) {
        event.target.classList.toggle(colorCss);
    }

    if(event.target.classList.contains(newBackground)) {
        event.target.classList.toggle(backgroundCss);
    }

    if(event.target.classList.contains(newText)){
        event.target.textContent = targetText === addButtonOriginal
            ? targetText = addButtonChange
            : targetText = addButtonOriginal;
    }

}


document.querySelector(".clickLikShowButton").addEventListener('click', showTable);

function showTable() {
    document.querySelector(".color-btn").classList.toggle("color-btn-show");
}
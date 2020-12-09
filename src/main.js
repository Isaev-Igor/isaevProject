const defaultValues = {
    classes: {
        showMainText: 'showMainText',
        showEndlessSlider: 'showEndlessSlider',
        showStudents: 'showStudents',
        showButton: 'showButton',
        showTable: 'showTable',
        showMaps: 'showMaps'
    }
}

const showList = document.querySelector(".link-style");
showList.addEventListener("click", handler);

function handler(event) {

    const showButtonClass = defaultValues.classes.showButton;
    const showEndlessSliderClass = defaultValues.classes.showEndlessSlider;
    const showStudentsClass = defaultValues.classes.showStudents;
    const showMainTextClass = defaultValues.classes.showMainText;
    const showTableClass = defaultValues.classes.showTable;
    const showMapsClass = defaultValues.classes.showMaps;

    const showMain = document.querySelector(".main-container");
    const showSlider = document.querySelector(".slider");
    const showStudents = document.querySelector(".students");
    const showTable = document.querySelector(".table");
    const showColorButton = document.querySelector(".color-btn");
    const showMaps = document.querySelector(".map");

    const flag = document.querySelectorAll('.flag');
    flag.forEach(item => item.classList.add("hide"));

    if (event.target.className === showMainTextClass) {
        showMain.classList.add("show");
        showMain.classList.remove("hide");
    }
    if (event.target.className === showEndlessSliderClass) {
        showSlider.classList.add("show");
        showSlider.classList.remove("hide");
    }
    if (event.target.className === showStudentsClass) {
        showStudents.classList.add("show");
        showStudents.classList.remove("hide");
    }
    if (event.target.className === showTableClass) {
        showTable.classList.add("show");
        showTable.classList.remove("hide");
    }
    if (event.target.className === showButtonClass) {
        showColorButton.classList.add("show");
        showColorButton.classList.remove("hide");
    }
    if (event.target.className === showMapsClass) {
        showMaps.classList.add("showMap");
        showMaps.classList.remove("hide");
    }
}



const date = new Date();
const currentTime = document.querySelector('.date');
const dayWeek = document.querySelector(".weekday");

function formatDate(date) {



    let day = date.getDate();
    let weekday = date.getDay();
    let options = { weekday: 'long'};
    if (weekday === 0||1||2||3||4||5||6) {
        dayWeek.textContent = new Intl.DateTimeFormat('ru-RU', options).format(date);
    }

    if (day < 10) day = '0' + day;
    currentTime.children[1].innerHTML = day;

    let month = date.getMonth() + 1;
    if (month < 10) month = '0' + month;
    currentTime.children[2].innerHTML = month;

    let year = date.getFullYear() % 100;
    if (year < 10) year = '0' + year;
    currentTime.children[3].innerHTML = year;


}

formatDate(date);
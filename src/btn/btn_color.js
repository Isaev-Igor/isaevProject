var div = document.querySelector('.test');
var div1 = document.querySelector('.test1');
var div2 = document.querySelector('.test2');

function randColor() {
    return Math.floor(Math.random() * 255);
}

const clickMe = (event) => {
    var el = event.target;
    if(el.clicked) {
        event.target.style.backgroundColor = ``;
        el.clicked = false;
    }else{
        event.target.style.backgroundColor = `rgb(${randColor()},${randColor()},${randColor()})`;
        el.clicked = true;
    }
}


div.addEventListener('click', clickMe);
div1.addEventListener('click', clickMe);
div2.addEventListener('click', clickMe);



function showTable() {
    let a = document.querySelector(".main__text");
    let b = document.querySelector(".btn-color");
    a.classList.add("main__text-none");
    a.classList.remove("main__text");
    b.classList.add("btn-color-show");
    b.classList.remove("btn-color");
}

document.querySelector(".btn-reset-color").addEventListener("click", showTable);
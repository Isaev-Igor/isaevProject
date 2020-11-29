document.querySelector(".btn").addEventListener("click", function (e){
    e.preventDefault();
    if(this.classList.contains("is-active")){
        this.classList.remove("is-active");
        document.querySelector(".menu").classList.remove("nav-active");
        document.body.classList.remove("body-active");
    } else {
        let container = document.querySelector(".container");
        this.classList.add("is-active");
        document.querySelector(".menu").classList.add("nav-active");
        container.classList.add("body-active");
    }
})
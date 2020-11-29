// let buttonEdit = document.querySelector("btn-edit");
// let buttonDelete = document.querySelector("btn-delete");

let buttonSave = document.querySelector(".btn-save");



let inputFirstName = document.querySelector(".first-name");
let inputLastName = document.querySelector(".last-name");
let inputAge = document.querySelector(".age");
let inputCourse = document.querySelector(".course");
let inputStartStudy = document.querySelector(".start-study");
let inputEndStudy = document.querySelector(".end-study");

function saveStudentsData() {
    let newTr = document.querySelector(".students-table-sheet");
    let trS = document.createElement("tr");

    let tdFirstName = document.createElement("td");
    let tdLastName = document.createElement("td");
    let tdAge = document.createElement("td");
    let tdCourse = document.createElement("td");
    let tdStartStudy = document.createElement("td");
    let tdEndStudy = document.createElement("td");

    newTr.appendChild(trS);

    trS.appendChild(tdFirstName);
    tdFirstName.innerHTML = inputFirstName.value;

    trS.appendChild(tdLastName);
    tdLastName.innerHTML = inputLastName.value;

    trS.appendChild(tdAge);
    tdAge.innerHTML = inputAge.value;

    trS.appendChild(tdCourse);
    tdCourse.innerHTML = inputCourse.value;

    trS.appendChild(tdStartStudy);
    tdStartStudy.innerHTML = inputStartStudy.value;

    trS.appendChild(tdEndStudy);
    tdEndStudy.innerHTML = inputEndStudy.value;
}


buttonSave.addEventListener("click", saveStudentsData);


document.querySelector(".clickLikShowStudents").addEventListener('click', showTable);

function showTable() {
    document.querySelector(".students").classList.toggle("students-show");
}
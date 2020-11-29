// let buttonEdit = document.querySelector("btn-edit");
let buttonDelete = document.querySelector(".btn-delete");
let buttonSave = document.querySelector(".btn-save");


let inputFirstName = document.querySelector(".first-name");
let inputLastName = document.querySelector(".last-name");
let inputAge = document.querySelector(".age");
let inputCourse = document.querySelector(".course");
let inputStartStudy = document.querySelector(".start-study");
let inputEndStudy = document.querySelector(".end-study");
let addTr = document.querySelector(".students-table-sheet");

function saveStudentsData() {
    let insertTr = document.createElement("tr");
    let tdCheck = document.createElement("td");
    let tdFirstName = document.createElement("td");
    let tdLastName = document.createElement("td");
    let tdAge = document.createElement("td");
    let tdCourse = document.createElement("td");
    let tdStartStudy = document.createElement("td");
    let tdEndStudy = document.createElement("td");

    addTr.appendChild(insertTr);
    insertTr.classList.add(`${inputLastName.value}`)
    insertTr.appendChild(tdCheck);
    tdCheck.innerHTML = `<input type="checkbox" name="${inputLastName.value}">`;

    insertTr.appendChild(tdFirstName);
    tdFirstName.innerHTML = inputFirstName.value;

    insertTr.appendChild(tdLastName);
    tdLastName.innerHTML = inputLastName.value;

    insertTr.appendChild(tdAge);
    tdAge.innerHTML = inputAge.value;

    insertTr.appendChild(tdCourse);
    tdCourse.innerHTML = inputCourse.value;

    insertTr.appendChild(tdStartStudy);
    tdStartStudy.innerHTML = inputStartStudy.value;

    insertTr.appendChild(tdEndStudy);
    tdEndStudy.innerHTML = inputEndStudy.value;
}

function deleteStudentsData() {
    let element = document.querySelectorAll('input[type=checkbox]');
    console.log(element);
    for (let i = 0; i < element.length; i++) {
        if (element[i].checked) {
            let deleteElement = document.querySelector(`.${element[i].name}`);
            addTr.removeChild(deleteElement);
        }
    }
}

buttonDelete.addEventListener("click", deleteStudentsData);
buttonSave.addEventListener("click", saveStudentsData);


document.querySelector(".clickLikShowStudents").addEventListener('click', showTable);

function showTable() {
    document.querySelector(".students").classList.toggle("students-show");
}
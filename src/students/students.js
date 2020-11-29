document.querySelector(".clickLikShowStudents").addEventListener('click', showTable);

function showTable() {
    document.querySelector(".students").classList.toggle("students-show");
}
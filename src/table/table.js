function addTable() {
    let body = document.querySelector("body");
    let numRows = document.getElementById("rows");
    let numColumns = document.getElementById("columns");
    let firstTable = document.querySelector("table");
    let rows = numRows.value;
    let columns = numColumns.value;


    table = document.createElement("table"),
        table.setAttribute("width", 200);
    table.setAttribute("border", 2);
    table.setAttribute("height", 200);
    for (let i = 0; i < columns; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < rows; j++) {
            let td = document.createElement("td");
            tr.appendChild(td);
            td.setAttribute("title", `${((i + 1) + "." + (j + 1))}`);
        }
        table.appendChild(tr);
    }

    if (firstTable == null) {
        return body.appendChild(table);
    } else {
        var newTable = body.appendChild(table);
        return document.body.replaceChild(newTable, firstTable);
    }
}

document.querySelector(".btn-table").addEventListener("click", addTable);

document.querySelector(".clickLikShowTable").addEventListener('click', showTable);

function showTable() {
    document.querySelector(".table").classList.toggle("table-show");
}



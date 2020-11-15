function addTable() {
    let body = document.querySelector("body");
    let numRows = document.getElementById("rows");
    let numColumns = document.getElementById("columns");
    let firstTable = document.querySelector("table");
    let rows = numRows.value;
    let columns = numColumns.value;


    table = document.createElement("table");
    table.setAttribute("width", 300);
    table.setAttribute("border", 1);
    table.setAttribute("height", 300);
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
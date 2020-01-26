"use strict";
function createtable() {
    var row = document.getElementById("row").value;
    var column = document.getElementById("column").value;
    var table = document.getElementsByTagName("table")[0];
    if (table != undefined)
        table.remove();

    let body = document.getElementsByTagName("body");
    table = document.createElement("table");

    body[0].appendChild(table);
    for (let i = 0; i < row; i++) {
        let row = document.createElement("tr");
        table.appendChild(row);
        addRows(column, row);

    }

}

function fill() {
    let rows = document.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
        let columns = rows[i].childNodes;
        for (let j = 0; j < columns.length; j++) {
            columns[j].addEventListener("click", changeColor);
            columns[j].textContent = "" + (i + 1) + (j + 1);
        }
    }
}
function changeColor() {
    let td = this;

    if (td.style.backgroundColor != "")
        td.style.backgroundColor = "";
    else
        td.style.backgroundColor = "red";
}

function addRows(column, row) {

    for (let i = 0; i < column; i++) {
        let column = document.createElement("td");
        row.appendChild(column);

    }
}

let button = document.getElementById("runBtn");

button.addEventListener("click", createtable);
button.addEventListener("click", fill);

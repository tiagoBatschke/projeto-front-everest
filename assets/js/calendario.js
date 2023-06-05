function generateCalendar() {
    const year = parseInt(document.getElementById("year").value);
    const month = parseInt(document.getElementById("month").value);
    const daysInMonth = new Date(year, month, 0).getDate();

    const firstDay = new Date(year, month - 1, 1).getDay();
    const calendarBody = document.getElementById("calendar-body");
    calendarBody.innerHTML = "";

    let date = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                const cell = document.createElement("td");
                row.appendChild(cell);
            } else if (date > daysInMonth) {
                break;
            } else {
                const cell = document.createElement("td");
                cell.innerText = date;
                cell.onclick = function () {
                    const selectedCell = document.querySelector(".selected");
                    if (selectedCell) {
                        selectedCell.classList.remove("selected");
                    }
                    this.classList.add("selected");
                };
                row.appendChild(cell);
                date++;
            }
        }
        calendarBody.appendChild(row);
    }
}

generateCalendar();
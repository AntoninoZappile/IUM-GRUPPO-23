const subArea = document.getElementById("subjectarea");
const userArea = document.getElementById("userarea");
const dataArea = document.getElementById("dataarea");

function toggleArea(areaName) {
    const area = document.getElementById(areaName);
    if (area.classList.contains("hidden")) {
        subArea.classList.add("hidden");
        userArea.classList.add("hidden");
        dataArea.classList.add("hidden");
        area.classList.remove("hidden");
    } else {
        area.classList.add("hidden");
    }
}
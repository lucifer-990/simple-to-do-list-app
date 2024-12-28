const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const Btn = document.querySelector(".btn").addEventListener('click', addtask);
const delbtn = document.querySelector(".del").addEventListener('click', deleteData);

function addtask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

function deleteData() {
    localStorage.removeItem("data", listContainer.innerHTML);
    listContainer.remove();
}

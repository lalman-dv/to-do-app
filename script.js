const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add task
function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

// Handle task click and delete
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

// Save to localStorage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// Load from localStorage
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

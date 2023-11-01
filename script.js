const taskInput = document.getElementById("task");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Task cannot be empty!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `<span>${taskText}</span> <button class="delete">Delete</button>`;
    taskList.appendChild(li);
    taskInput.value = "";

    li.querySelector(".delete").addEventListener("click", function () {
        li.remove();
    });
}

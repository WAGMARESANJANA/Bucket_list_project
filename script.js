function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
    if (taskText === "") return;

    let taskList = document.getElementById("taskList");
    let taskDiv = document.createElement("div");
    taskDiv.className = "task";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = updateStatus;

    let taskSpan = document.createElement("span");
    taskSpan.innerText = taskText;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = function () {
        taskDiv.remove();
        updateTaskCount();
    };

    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.onclick = function () {
        let newText = prompt("Edit task:", taskSpan.innerText);
        if (newText) taskSpan.innerText = newText;
    };

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskSpan);
    taskDiv.appendChild(deleteBtn);
    taskDiv.appendChild(editBtn);
    taskList.appendChild(taskDiv);

    input.value = "";
    updateTaskCount();
}

function updateStatus() {
    this.parentElement.classList.toggle("completed");
    updateTaskCount();
}

function updateTaskCount() {
    let tasks = document.querySelectorAll(".task");
    let completedTasks = document.querySelectorAll(".task.completed").length;
    document.getElementById("taskCount").innerText = `Completed: ${completedTasks} | Uncompleted: ${tasks.length - completedTasks}`;
}

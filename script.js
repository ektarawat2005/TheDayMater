let tasks = [];
let completed = 0;

function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") return;

    tasks.push(taskText);
    input.value = "";

    renderTasks();
}

function renderTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerText = task;

        li.onclick = () => completeTask(index);

        list.appendChild(li);
    });

    updateStats();
}

function completeTask(index) {
    tasks.splice(index, 1);
    completed++;

    renderTasks();
}

function updateStats() {
    document.getElementById("completed").innerText = completed;
    document.getElementById("remaining").innerText = tasks.length;

    let total = completed + tasks.length;
    let percent = total === 0 ? 0 : (completed / total) * 100;

    document.getElementById("progressFill").style.width = percent + "%";
}

// Energy slider
document.getElementById("energySlider").oninput = function () {
    document.getElementById("energyValue").innerText = this.value;
};
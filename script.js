const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

function saveTaskToStorage(task) {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  storedTasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(storedTasks));
}

function removeTaskFromStorage(id) {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const filteredTasks = storedTasks.filter(task => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(filteredTasks));
}

function updateTaskStatusInStorage(id, completed) {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const task = storedTasks.find(t => t.id === id);
  if (task) {
    task.completed = completed;
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }
}

function loadTasksFromStorage() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function createTaskElement({ id, text, completed = false }) {
  const check = document.createElement("div");
  check.classList.add("check");

  const check2 = document.createElement("span");
  const checkIcon = document.createElement("i");
  checkIcon.classList.add("fa-solid", "fa-circle-check");
  check2.appendChild(checkIcon);
  check2.classList.add("checkIcon");

  const task = document.createElement("li");
  task.textContent = text;
  task.setAttribute("id", `task-${id}`);
  task.prepend(check);
  task.prepend(check2);

  const deleteButton = document.createElement("button");
  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-solid", "fa-trash-can");
  deleteButton.appendChild(deleteIcon);
  deleteButton.id = "deleteButton";
  task.append(deleteButton);

  if (completed) {
    check.style.opacity = "0";
    check2.style.display = "block";
    task.style.textDecoration = "line-through";
    task.style.opacity = "0.5";
  }

  check.addEventListener("click", function () {
    if (check.style.opacity === "0") {
      check.style.opacity = "1";
      check2.style.display = "none";
      task.style.textDecoration = "none";
      task.style.opacity = "1";
      updateTaskStatusInStorage(id, false);
    } else {
      check.style.opacity = "0";
      check2.style.display = "block";
      task.style.textDecoration = "line-through";
      task.style.opacity = "0.5";
      updateTaskStatusInStorage(id, true);
    }
  });

  deleteButton.addEventListener("click", function () {
    task.remove();
    removeTaskFromStorage(id);
  });

  return task;
}

function addTask() {
  const value = taskInput.value.trim();
  if (value !== "") {
    const id = Math.random().toString(36).substr(2, 9);
    const newTask = { id, text: value, completed: false };

    const taskEl = createTaskElement(newTask);
    taskList.append(taskEl);

    saveTaskToStorage(newTask);

    taskInput.value = "";
  }
}

function renderTasks() {
  const tasks = loadTasksFromStorage();
  tasks.forEach(task => {
    const taskEl = createTaskElement(task);
    taskList.append(taskEl);
  });
}

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
  }
});

document.addEventListener("DOMContentLoaded", renderTasks);

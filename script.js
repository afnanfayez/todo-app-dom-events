const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

function addTask() {
  const value = taskInput.value.trim();
  if (value !== "") {
    const check = document.createElement("div");
    check.classList.add("check");
    const check2 = document.createElement("span");


    const checkIcon = document.createElement("i");
    checkIcon.classList.add("fa-solid", "fa-circle-check");
    check2.appendChild(checkIcon);

    check2.classList.add("checkIcon");

    const task = document.createElement("li");
    task.textContent = taskInput.value;
    task.prepend(check);
    task.prepend(check2);

    const deleteButton = document.createElement("button");
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash-can");
    deleteButton.appendChild(deleteIcon);
    deleteButton.id = "deleteButton";
    task.append(deleteButton);

    taskList.append(task);

 check.addEventListener("click", function () {
  if (check.style.opacity === "0") {
    check.style.opacity = "1";
    check2.style.display = "none";
    task.style.textDecoration = "none";
    task.style.opacity = "1";
  } else {
    check.style.opacity = "0";
    check2.style.display = "block";
    task.style.textDecoration = "line-through";
    task.style.opacity = "0.5";
  }
});

    deleteButton.addEventListener("click", function () {
      task.remove();
    });

    taskInput.value = "";
  }
}

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
  }
});

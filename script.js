
const taskInput=document.getElementById("taskInput");
const addTaskButton=document.getElementById("addTaskButton");
const taskList=document.getElementById("taskList");

addTaskButton.addEventListener("click",function(event){
    if (taskInput.value.trim() !=='') {
        const check=document.createElement("input");
        check.type="radio";
     const task = document.createElement("li");
     task.textContent=taskInput.value;
      task.prepend(check);

      const deleteButton=document.createElement("button");
      deleteButton.innerHTML="<i class='fa-solid fa-trash-can'></i>";
        deleteButton.id="deleteButton";
      task.append(deleteButton);
     taskList.append(task);
      //console.log("Task added:", task.textContent);
taskInput.value = ''; 
    }
        
});

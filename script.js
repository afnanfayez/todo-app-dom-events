
const taskInput=document.getElementById("taskInput");
const addTaskButton=document.getElementById("addTaskButton");
const taskList=document.getElementById("taskList");

addTaskButton.addEventListener("click",function(event){
     const value = taskInput.value.trim();  
    if (value !== '') {

        const check=document.createElement("input");
        const check2=document.createElement("span");
        check.type="radio";
        
        check2.innerHTML="<i class='fa-solid fa-circle-check'></i>"
        check2.classList.add("checkIcon");

     const task = document.createElement("li");
     task.textContent=taskInput.value;
      task.prepend(check);
      task.prepend(check2);


      const deleteButton=document.createElement("button");
      deleteButton.innerHTML="<i class='fa-solid fa-trash-can'></i>";
        deleteButton.id="deleteButton";
      task.append(deleteButton);
     taskList.append(task);
   
      console.log(task);
taskInput.value = ''; 

    check.addEventListener("click",function(){   
    check.style.opacity="0";
     check2.style.display="block";
    });

    
    }

});

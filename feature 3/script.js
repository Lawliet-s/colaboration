const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask(){

    const task = taskInput.value.trim();

    if(task === ""){
        alert("Masukkan tugas terlebih dahulu!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${task}</span>
        <button class="delete">Hapus</button>
    `;

    li.querySelector(".delete").addEventListener("click", function(){
        li.remove();
    });

    taskList.appendChild(li);

    taskInput.value="";
}




function addTask() {
    const taskTitle = document.querySelector("#task-title").value;

    if (taskTitle) {
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);
        newTask.querySelector(".task-title").textContent = taskTitle;
        newTask.classList.remove("template");
        newTask.classList.remove("hide");
        const list = document.querySelector("#task-list");
        list.appendChild(newTask);
        const removeBtn = newTask.querySelector("#remove-btn").addEventListener("click", function () {
            removeTask(this);

        });
        const doneBtn = newTask.querySelector("#done-btn").addEventListener("click", function () {
            completeTask(this);
        })

        document.querySelector("#task-title").value = "";
        // console para verificar se a funcao esta sendo chamada
        console.info("Tarefa foi adicionada")


    }
};




function removeTask(task) {
    // console para verificar se a funcao esta sendo chamada
    console.debug("Tarefa Foi removida ");
    task.parentNode.remove(true);

};

function completeTask(task) {
    // console para verificar se a funcao esta sendo chamada
    console.log("tarefa foi marcada como completa");

    const taskComlete = task.parentNode;
    taskComlete.classList.toggle("done");

};


const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function (clique) {

    clique.preventDefault();
    addTask();

});
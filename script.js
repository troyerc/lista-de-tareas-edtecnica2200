document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("tarea");
    const addTaskButton = document.getElementById("agregar");
    const taskList = document.getElementById("listado");

    addTaskButton.addEventListener("click", addTask);

    taskInput.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
            
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-button">Eliminar</button>
            `;

            taskList.appendChild(listItem);
            taskInput.value = "";
        }
    }

    taskList.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete-button")) {
            e.target.parentElement.remove();
        }
    });
});

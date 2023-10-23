        const taskList = document.getElementById("task-list");
        const taskInput = document.getElementById("task-input");
        const addButton = document.getElementById("add-button");

        function addTask() {
            const taskText = taskInput.value.trim();
            if (taskText) {
                const task = document.createElement("li");
                task.className = "task";
                task.innerHTML = `
                    <label>${taskText}</label>
                    <button class="delete-button">Delete</button>
                `;
                const deleteButton = task.querySelector(".delete-button");
                deleteButton.addEventListener("click", function () {
                    taskList.removeChild(task);
                    saveTasks();
                });

                taskList.appendChild(task);
                taskInput.value = "";
                saveTasks();
            }
        }
        function loadTasks() {
            const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.forEach((taskText) => {
                const task = document.createElement("li");
                task.className = "task";
                task.innerHTML = `
                    <label>${taskText}</label>
                    <button class="delete-button">Delete</button>
                `;
                const deleteButton = task.querySelector(".delete-button");
                deleteButton.addEventListener("click", function () {
                    taskList.removeChild(task);
                    saveTasks();
                });

                taskList.appendChild(task);
            });
        }
        function saveTasks() {
            const tasks = Array.from(taskList.querySelectorAll("li")).map((task) => task.querySelector("label").textContent);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }

        addButton.addEventListener("click", addTask);
        loadTasks();
 const addBtn = document.getElementById("addBtn");
        const taskInput = document.getElementById("taskInput");
        const searchInput = document.getElementById("searchInput");
        const taskList = document.getElementById("taskList");

        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        // ---------- Save to LocalStorage ----------
        function saveTasks() {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }

        // ---------- Render Tasks ----------
        function renderTasks(filtered = tasks) {
            taskList.innerHTML = "";

            filtered.forEach(task => {
                const li = document.createElement("li");

                // Apply completed style
                if (task.completed) li.classList.add("completed");

                li.innerHTML = `
                    <span onclick="toggleComplete(${task.id})">${task.text}</span>
                    <button class="deleteBtn" onclick="deleteTask(${task.id})">X</button>
                `;

                taskList.appendChild(li);
            });
        }

        // ---------- Add Task ----------
        addBtn.addEventListener("click", () => {
            const text = taskInput.value.trim();
            if (text === "") {
                alert("Please enter a task!");
                return;
            }

            const newTask = {
                id: Date.now(),
                text: text,
                completed: false
            };

            tasks.push(newTask);
            saveTasks();
            renderTasks();

            taskInput.value = "";
        });

        // ---------- Toggle Complete ----------
        function toggleComplete(id) {
            tasks = tasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            );

            saveTasks();
            renderTasks();
        }

        // ---------- Delete Task ----------
        function deleteTask(id) {
            tasks = tasks.filter(task => task.id !== id);
            saveTasks();
            renderTasks();
        }

        // ---------- Search Tasks ----------
        searchInput.addEventListener("keyup", () => {
            const keyword = searchInput.value.toLowerCase();
            const filtered = tasks.filter(task =>
                task.text.toLowerCase().includes(keyword)
            );

            renderTasks(filtered);
        });

        // Render on page load
        renderTasks();
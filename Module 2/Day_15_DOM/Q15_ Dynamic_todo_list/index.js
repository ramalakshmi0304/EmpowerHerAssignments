 const input = document.getElementById("taskInput");
        const addBtn = document.getElementById("addBtn");
        const taskList = document.getElementById("taskList");

        addBtn.addEventListener("click", function () {
            const taskText = input.value.trim();

            // Prevent empty tasks
            if (taskText === "") {
                alert("Please enter a task!");
                return;
            }

            // Create a new li
            const li = document.createElement("li");

            // Create task text span
            const span = document.createElement("span");
            span.textContent = taskText;

            // Create Complete button
            const completeBtn = document.createElement("button");
            completeBtn.textContent = "Complete";

            // Create Delete button
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";

            // Add event listener to complete button
            completeBtn.addEventListener("click", function () {
                span.classList.toggle("completed"); // toggles strikeout effect
            });

            // Add event listener to delete button
            deleteBtn.addEventListener("click", function () {
                li.remove(); // removes the li from the ul
            });

            // Append everything to li
            li.appendChild(span);
            li.appendChild(completeBtn);
            li.appendChild(deleteBtn);

            // Add li to ul
            taskList.appendChild(li);

            // Clear the input box
            input.value = "";
        });
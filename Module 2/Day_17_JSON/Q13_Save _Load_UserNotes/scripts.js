const noteInput = document.getElementById("noteInput");
        const saveNotesbtn = document.getElementById("saveNotesbtn");
        const loadNotesbtn = document.getElementById("loadNotesbtn");
        const clearNotesbtn = document.getElementById("clearNotesbtn");


       
        saveNotesbtn.addEventListener('click', () => {

            const text = noteInput.value.trim();

            if (text === "") {
                alert("please enter some notes before saving");
                return;
            }

            localStorage.setItem("notes", text);
            alert("Notes saved successfully!");
        }),

            loadNotesbtn.addEventListener('click', () => {
                const savedNotes = localStorage.getItem("notes");

                if (savedNotes) {
                    noteInput.value = savedNotes;
                    alert("Notes loaded!");
                } else {
                    alert("No saved notes found!");

                }

            });

        clearNotesbtn.addEventListener("click", () => {
            localStorage.removeItem("notes");
            noteInput.value = "";
            alert("Notes cleared!");
        });


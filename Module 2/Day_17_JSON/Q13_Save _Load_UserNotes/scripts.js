const noteInput = document.getElementById("noteInput");
const saveBtn = document.getElementById("saveBtn");
const loadBtn = document.getElementById("loadBtn");
const clearBtn = document.getElementById("clearBtn");

// --- Load notes automatically on page load ---
window.onload = function () {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
        noteInput.value = savedNotes;
    }
};

// --- Save notes ---
saveBtn.addEventListener("click", () => {
    const text = noteInput.value.trim();

    if (text === "") {
        alert("Please enter some notes before saving!");
        return;
    }

    localStorage.setItem("notes", text);
    alert("Notes saved successfully!");
});

// --- Load notes manually ---
loadBtn.addEventListener("click", () => {
    const savedNotes = localStorage.getItem("notes");

    if (savedNotes) {
        noteInput.value = savedNotes;
        alert("Notes loaded!");
    } else {
        alert("No saved notes found!");
    }
});

// --- Clear notes ---
clearBtn.addEventListener("click", () => {
    localStorage.removeItem("notes");
    noteInput.value = "";
    alert("Notes cleared!");
});

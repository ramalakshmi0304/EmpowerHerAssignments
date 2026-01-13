// server.js
import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;

app.use(express.json());

// Helper functions
const readData = () => {
  const data = fs.readFileSync("db.json", "utf-8");
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
};

// GET all students
app.get("/students", (req, res) => {
  try {
    const data = readData();
    res.json({ success: true, students: data.students });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch students" });
  }
});

// POST add new student
app.post("/add-students", (req, res) => {
  try {
    const { name, course } = req.body;

    if (!name || !course) {
      return res.status(400).json({ success: false, message: "Name and course are required" });
    }

    const data = readData();

    // Generate new string ID
    const ids = data.students.map(s => Number(s.id));
    const newId = ids.length > 0 ? (Math.max(...ids) + 1).toString() : "1";

    const newStudent = { id: newId, name, course };
    data.students.push(newStudent);
    writeData(data);

    res.status(201).json({ success: true, message: "Student added successfully", student: newStudent });

  } catch (error) {
    res.status(500).json({ success: false, message: "Error adding student" });
  }
});

// PATCH update student partially
app.patch("/students/:id", (req, res) => {
  try {
    const id = req.params.id; // string ID
    const updates = req.body;

    const data = readData();
    const studentIndex = data.students.findIndex(s => s.id === id);

    if (studentIndex === -1) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }

    // Prevent updating ID
    const { id: _, ...allowedUpdates } = updates;

    data.students[studentIndex] = {
      ...data.students[studentIndex],
      ...allowedUpdates
    };

    writeData(data);

    res.json({ success: true, message: "Student updated successfully", student: data.students[studentIndex] });

  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating student" });
  }
});

// DELETE student
app.delete("/students/:id", (req, res) => {
  try {
    const id = req.params.id;

    const data = readData();
    const studentIndex = data.students.findIndex(s => s.id === id);

    if (studentIndex === -1) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }

    const deletedStudent = data.students.splice(studentIndex, 1)[0];
    writeData(data);

    res.json({ success: true, message: "Student deleted successfully", student: deletedStudent });

  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting student" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

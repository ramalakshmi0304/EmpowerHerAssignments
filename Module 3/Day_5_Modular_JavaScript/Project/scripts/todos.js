import { Navbar } from "../components/navbar.js";
import { Footer } from "../components/footer.js";
import { displayTodos } from "../modules/displayTodos.js";

document.getElementById("navbar").innerHTML = Navbar();
document.getElementById("footer").innerHTML = Footer();

// 🔐 Check Login Status
const loggedIn = localStorage.getItem("isLoggedIn");

if (!loggedIn) {
    alert("Please login first!");
    window.location.href = "./login.html";
}

// Fetch todos
async function loadTodos() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
    const data = await res.json();
    displayTodos(data);
}

loadTodos();

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getDatabase, ref, push, onValue, remove, set } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBZntnoIBPyCOriQZ5csrXJBxZ7sD6Je24",
  authDomain: "activity-tracking-app-3b811.firebaseapp.com",
  databaseURL: "https://activity-tracking-app-3b811-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "activity-tracking-app-3b811",
  storageBucket: "activity-tracking-app-3b811.appspot.com",
  messagingSenderId: "775454714920",
  appId: "1:775454714920:web:1ac634e70fa5a8638b591d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const provider = new GoogleAuthProvider();

// DOM
const loginPage = document.getElementById('loginPage');
const dashboardPage = document.getElementById('dashboardPage');
const analyticsPage = document.getElementById('analyticsPage');

const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const googleLoginBtn = document.getElementById('googleLoginBtn');

const logoutBtn = document.getElementById('logoutBtn');
const logoutBtn2 = document.getElementById('logoutBtn2');
const gotoAnalytics = document.getElementById('gotoAnalytics');
const gotoDashboard = document.getElementById('gotoDashboard');

const nameInput = document.getElementById('nameInput');
const durationInput = document.getElementById('durationInput');
const addBtn = document.getElementById('addBtn');
const activitiesList = document.getElementById('activitiesList');
const minutesLeftEl = document.getElementById('minutesLeft');

const pieCanvas = document.getElementById('pieChart');
const barCanvas = document.getElementById('barChart');

let uid = null, pieChart = null, barChart = null, activities = [];

function getToday() { return new Date().toISOString().split('T')[0]; }
function showPage(page) { loginPage.classList.add('hidden'); dashboardPage.classList.add('hidden'); analyticsPage.classList.add('hidden'); page.classList.remove('hidden'); }

// Auth
loginBtn.onclick = () => {
  const email = emailEl.value.trim(), pw = passwordEl.value;
  if (!email || !pw) return alert("Enter email & password");
  signInWithEmailAndPassword(auth, email, pw).catch(e => alert(e.message));
}
signupBtn.onclick = () => {
  const email = emailEl.value.trim(), pw = passwordEl.value;
  if (!email || !pw) return alert("Enter email & password");
  createUserWithEmailAndPassword(auth, email, pw)
    .then(() => alert("Signup successful. Please login"))
    .catch(e => alert(e.message));
}
googleLoginBtn.onclick = () => signInWithPopup(auth, provider).catch(e => alert(e.message));

logoutBtn.onclick = logoutBtn2.onclick = () => {
  signOut(auth).then(() => {
    nameInput.value = ''; durationInput.value = '';
    showPage(loginPage);
  });
};
gotoAnalytics.onclick = () => showPage(analyticsPage);
gotoDashboard.onclick = () => showPage(dashboardPage);

// Activities
addBtn.onclick = () => {
  const name = nameInput.value.trim();
  const duration = Number(durationInput.value);
  if (!name || !duration) return alert("Enter valid name & minutes");

  const key = addBtn.dataset.updateKey;
  if (key) {
    const r = ref(db, `entries/${uid}/${getToday()}/${key}`);
    set(r, { name, duration, timestamp: Date.now() });
    addBtn.textContent = 'Add / Update';
    delete addBtn.dataset.updateKey;
  } else {
    const newRef = push(ref(db, `entries/${uid}/${getToday()}`));
    set(newRef, { name, duration, timestamp: Date.now() });
  }

  nameInput.value = ''; durationInput.value = '';
}

// Render
function renderActivities() {
  activitiesList.innerHTML = '';

  if (!activities || activities.length === 0) {
    pieChart?.destroy();
    barChart?.destroy();
    activitiesList.innerHTML = `<div style="text-align:center; padding:20px; color:#6b7280;">
      <strong>No activities logged yet</strong><br>
      Start tracking your day by logging activities.
    </div>`;
    minutesLeftEl.textContent = '';
    return;
  }

  let totalMinutes = 0;

  activities.forEach((a) => {
    totalMinutes += a.duration;

    const li = document.createElement('li');
    const info = document.createElement('span');

    // Inline editable inputs
    const nameEl = document.createElement('input');
    nameEl.value = a.name;
    nameEl.className = 'activity-input';
    const durationEl = document.createElement('input');
    durationEl.value = a.duration;
    durationEl.type = 'number';
    durationEl.className = 'activity-input';

    info.appendChild(nameEl);
    info.appendChild(durationEl);

    const actions = document.createElement('span');

    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    saveBtn.className = 'activity-btn edit';
    saveBtn.onclick = () => {
      const updatedName = nameEl.value.trim();
      const updatedDuration = Number(durationEl.value);
      if (!updatedName || !updatedDuration) return alert("Enter valid data");
      set(ref(db, `entries/${uid}/${getToday()}/${a.key}`), { name: updatedName, duration: updatedDuration, timestamp: Date.now() });
    };

    const minutesLeft = 1440 - totalMinutes;
    minutesLeftEl.textContent = `Minutes left in day: ${minutesLeft}`;

    // Color-code based on remaining time
    if (minutesLeft > 720) {
      minutesLeftEl.style.color = '#10b981'; // green
    } else if (minutesLeft > 360) {
      minutesLeftEl.style.color = '#f59e0b'; // yellow
    } else {
      minutesLeftEl.style.color = '#ef4444'; // red
    }
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'activity-btn delete';
    deleteBtn.onclick = () => {
      if (confirm('Delete this activity?')) {
        remove(ref(db, `entries/${uid}/${getToday()}/${a.key}`));
      }
    };

    actions.appendChild(saveBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(info);
    li.appendChild(actions);
    activitiesList.appendChild(li);
  });

  // Show minutes left (1440 total in a day)
  minutesLeftEl.textContent = `Minutes left in day: ${1440 - totalMinutes}`;

  // Charts
  const labels = activities.map(a => a.name);
  const data = activities.map(a => a.duration);
  const colors = ['#7c3aed', '#4f46e5', '#ec4899', '#f59e0b', '#10b981'];
  while (colors.length < labels.length) colors.push('#' + Math.floor(Math.random() * 16777215).toString(16));

  if (pieChart) pieChart.destroy();
  pieChart = new Chart(pieCanvas, { type: 'pie', data: { labels, datasets: [{ data, backgroundColor: colors }] } });

  if (barChart) barChart.destroy();
  barChart = new Chart(barCanvas, { type: 'bar', data: { labels, datasets: [{ label: 'Minutes', data, backgroundColor: colors }] }, options: { scales: { y: { beginAtZero: true } } } });
}

// Firebase listener
function attachListener() {
  const r = ref(db, `entries/${uid}/${getToday()}`);
  onValue(r, snapshot => {
    const data = snapshot.val() || {};
    activities = Object.keys(data).map(k => ({ ...data[k], key: k }));
    renderActivities();
  });
}

// Auth state
onAuthStateChanged(auth, user => {
  if (user) { uid = user.uid; showPage(dashboardPage); attachListener(); }
  else { uid = null; activities = []; pieChart?.destroy(); barChart?.destroy(); showPage(loginPage); }
});
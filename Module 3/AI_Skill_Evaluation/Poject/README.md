# Daily Tracker App 🚀

A simple, single-page application (SPA) built with vanilla JavaScript, HTML, and CSS for tracking daily activities and visualizing time usage. It uses **Firebase Realtime Database** for persistence and **Firebase Authentication** for user management, including Google sign-in. Chart visualizations are powered by **Chart.js**.

Video link: https://drive.google.com/file/d/1pARTHiLR4Fm3wve30hsY8vJh87tJrqJS/view?usp=sharing
Deployment link:https://github.com/ramalakshmi0304/AI-Powered-Daily-Time-Tracking-Analytics-Dashboard.git
---

## ✨ Features

* **User Authentication:** Secure sign-up, email/password login, and Google Sign-in using Firebase Auth.
* **Activity Logging:** Easily add, update, and delete daily activities with specified durations (in minutes).
* **Time Management:** Tracks and displays the total **minutes remaining** in the 24-hour day (1440 minutes).
* **Real-time Updates:** Activities are synchronized and updated instantly via Firebase Realtime Database.
* **Data Visualization (Analytics):**
    * **Pie Chart:** Visualizes the proportion of time spent on different activities.
    * **Bar Chart:** Compares the duration spent on each activity.
* **Inline Editing:** Edit the name or duration of a logged activity directly in the list.

---

## 📂 Project Structure

The application is structured into three main files:

| File Name | Description |
| :--- | :--- |
| `index.html` | The main HTML structure containing the login, dashboard, and analytics views. Links CSS and JS. |
| `style.css` | All styling, including the modern layout, card design, and responsive elements. |
| `script.js` | Core logic including Firebase initialization, authentication handlers, CRUD operations for activities, and Chart.js rendering. |

---

## 🛠️ Setup and Installation

This is a front-end application that requires a **Firebase Project** for data persistence and authentication.

### 1. Firebase Configuration

1.  **Create a Firebase Project:** Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2.  **Enable Services:**
    * **Authentication:** Enable **Email/Password** and **Google** sign-in methods.
    * **Realtime Database:** Create a new database instance.
3.  **Get Configuration:** In your project settings, find the Firebase configuration object (it looks like the object in `script.js`).

### 2. Update `script.js`

Open the `script.js` file and replace the placeholder `firebaseConfig` object with your actual configuration details:

```javascript
// Example of the object you need to update in script.js
const firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "YOUR_AUTH_DOMAIN_HERE",
    databaseURL: "YOUR_DATABASE_URL_HERE",
    projectId: "YOUR_PROJECT_ID_HERE",
    // ... other fields
};
let seconds = parseInt(prompt("Enter countdown time in seconds:"), 10);

// Start countdown
let countdown = setInterval(() => {
  console.log("Time left:", seconds);
  seconds--;

  if (seconds < 0) {
    clearInterval(countdown);
    console.log("Countdown Complete!");
  }
}, 1000);

// Check for key press after a small delay using setTimeout
setTimeout(() => {
  document.addEventListener("keydown", (event) => {
    if (event.key === "s") {
      clearInterval(countdown);
      console.log("Countdown Stopped by User!");
    }
  });
}, 1000);
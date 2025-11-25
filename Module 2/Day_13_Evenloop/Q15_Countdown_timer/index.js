const readline = require("readline");

// Create input interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Enter countdown time in seconds: ", (input) => {
  let seconds = parseInt(input, 10);

  if (isNaN(seconds) || seconds < 0) {
    console.log("Invalid number!");
    rl.close();
    return;
  }

  console.log(`Countdown started for ${seconds} seconds...`);
  console.log('Press "s" anytime to stop.');


  let countdown = setInterval(() => {
    console.log("Time left:", seconds);
    seconds--;

    if (seconds < 0) {
      clearInterval(countdown);
      console.log("Countdown Complete!");
      rl.close();
    }
  }, 1000);


  setTimeout(() => {
    process.stdin.on("data", (key) => {
      if (key.toString().trim() === "s") {
        clearInterval(countdown);
        console.log("Countdown Stopped by User!");
        rl.close();
      }
    });
  }, 500); 
});

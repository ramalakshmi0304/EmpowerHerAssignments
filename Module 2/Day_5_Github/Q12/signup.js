function signup(userName) {
  let users = ["ram", "sita", "lakshmi", "krishna"];

  if (users.includes(userName)) {
    return "User Already Registered, Please Login";
  } else {
    users.push(userName);
    return "Signup Successful, Please Login";
  }
}

// Example:
console.log(signup("ram"));     
console.log(signup("newUser")); 
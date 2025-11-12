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


function login(userName, password) {
  let users = ["ram", "sita", "lakshmi", "krishna"];

  if (!users.includes(userName)) {
    return "User Not Found, Please Signup";
  } else if (password !== "Emp@123") {
    return "Wrong Password....";
  } else {
    return "Login Successful...";
  }
}


console.log(login("ram", "Emp@123")); 
console.log(login("sita", "wrong"));  
console.log(login("newUser", "Emp@123"));
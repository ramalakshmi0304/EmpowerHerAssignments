const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

const email = profile?.user?.details?.email;
const phone = profile?.user?.details?.phone;
console.log(email);
console.log(phone);

// Optional chaining (?.) stops the chain if any part is undefined or null.

// So trying to access phone does not throw an error, it simply returns:
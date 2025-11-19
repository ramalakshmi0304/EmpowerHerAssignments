

const order = {
  id: 101,
  customer: {
    name: "Lakshmi"
  }
};

console.log(order.customer.address?.street);
// ✔ Output:

// undefined
// address does NOT exist,
// but optional chaining ?. prevents a crash.
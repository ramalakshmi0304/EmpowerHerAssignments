const people = [
    {
        name: "Alice",
        address: {
            city: "New York",
            street: { name: "Broadway", number: 123 }
        }
    },
    {
    name: "Bob",
    address: {
      city: "Los Angeles",
      street: { name: "Sunset Boulevard", number: 456 }
    }
  }

];

const result = people.map(person=>{
    const {
        name, address:{
            city,
            street:{name:streetName}
        }
    }=person;
    return `${name} lives in ${city} on ${streetName}`;
});
console.log(result);

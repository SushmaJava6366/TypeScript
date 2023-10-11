var Address = {
    name: "sushma",
    age: 24
};
console.log(Address.name);
// Nested Objects
var Person = {
    id: 1,
    name: "Ramya",
    age: 20,
    skils: ["java", "javascript", "typescript"],
    Address: {
        city: "RR Nagar",
        phonenumber: 9748343210
    }
};
console.log(Person.Address);

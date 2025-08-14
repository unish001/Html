// Division function
const divide = (num, den) => {
    if (den === 0) { // use triple equals for strict comparison
        console.log("Alert: The denominator is zero...");
    } else {
        let div_result = num / den;
        console.log("Result:", div_result);
    }
};

divide(10, 0);

// Object (key: value pairs)
const person = {
    name: "Ronaldoooooooooo",
    age: 40,
    address: "Saudi Arabia", // no need for quotes unless key has spaces
    contact: 9122321905,
    gender: "male",
    status: true,
    MonthlyIncome: "180 million $"
};

// Accessing keys
console.log("Name of person =", person["name"]);  // bracket notation
console.log("Contact of person =", person.contact); // dot notation

// Adding new keys
person["maritalStatus"] = "Unmarried";
person.email = "ronaldo07@gmail.com";

// Display new keys
console.log("Marital Status =", person["maritalStatus"]);
console.log("Email =", person.email);

// Updating existing keys
person.status = false;
person.MonthlyIncome = 8008; // changed to number

console.log("Updated person:", person);

// Deleting keys
delete person.gender;
delete person.address;

console.log("After delete:", person);

//objext to array
//array of keys 
const keys = Object.keys(person)
console.log("keys=",keys)
const value=Object.values(person)
console.log("value=",value)
const personArray = Object.entries(person)
console.log("person array:",personArray)


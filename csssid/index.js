// ===== Division Function =====
const divide = (num, den) => {
    if (den === 0) {
        console.log("Alert: The denominator is zero...");
    } else {
        let div_result = num / den;
        console.log("Result:", div_result);
    }
};

divide(10, 0); // Test division by zero
divide(20, 4); // Test normal division

// ===== Object Creation =====
const person = {
    name: "Ronaldo",
    age: 40,
    address: "Saudi Arabia",
    contact: 9122321905,
    gender: "male",
    status: true,
    monthlyIncome: "180 million $"
};

// ===== Accessing Keys =====
console.log("Name:", person.name);
console.log("Contact:", person["contact"]);

// ===== Adding New Keys =====
person.maritalStatus = "Unmarried";
person.email = "ronaldo07@gmail.com";

console.log("Marital Status:", person.maritalStatus);
console.log("Email:", person.email);

// ===== Updating Existing Keys =====
person.status = false;
person.monthlyIncome = 8008; // Changed to number
console.log("Updated person:", person);

// ===== Deleting Keys =====
delete person.gender;
delete person.address;
console.log("After delete:", person);

// ===== Object to Array =====
const keys = Object.keys(person);
const values = Object.values(person);
const entries = Object.entries(person);

console.log("Keys:", keys);
console.log("Values:", values);
console.log("Entries:", entries);

// ===== Array Destructuring =====
const fruits = ["apple", "coconut", "banana", "kiwi", "papaya", "mango"];
const [apple, coconut, banana, kiwi, papaya, mango] = fruits;
console.log("Fruits:", apple, coconut, banana, kiwi, papaya, mango);

// ===== Object Destructuring =====
const employee = {
    name: "Shyam Shrestha",
    salary: 20000,
    shift: "day",
    startDate: "2025-01-28",
    workingHours: "6hrs"
};

const { name, salary, shift, startDate, workingHours } = employee;
console.log("Employee Details:", name, shift, startDate, salary, workingHours);

//rest and spread operator
//spread operator example with array
const array1=[38,46,34,63]
const array2=[24,67,86,32]
//merging above two array
const mergedArray=[...array1,...array2]
console.log(mergedArray)

// obj1 has some keys
const obj1 = {
    name: "Alice",
    age: 25,
    city: "Kathmandu"
};

// obj2 has status and id
const obj2 = {
    status: "active",
    id: 101
};

// Merge obj1 into obj2 using spread operator
const mergedObj = { ...obj2, ...obj1 };

console.log("Merged Object:", mergedObj);

// Using rest operator to accept multiple arguments
const addMultiple = (...values) => {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum;
};

// Call the function
const res = addMultiple(4, 5, 43, 543, 232, 232, 234);

console.log("Added multiple:", res);

//finding element from html
//finding element with id
const titleElement=document.getElementById("title")
console.log("title element:",titleElement)
const listElements=document.getElementsByClassName("list")
console.log("list element:",listElements)

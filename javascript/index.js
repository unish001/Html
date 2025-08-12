// dynamically typed data typeof
// 1. var  -> function scope variable
// 2. let  -> block scope variable
// 3. const -> cannot be reassigned (but objects/arrays can be mutated)

var a = "hello world";
console.log("value of a =", a);
console.log("type of a =", typeof(a));

let b = 10.1010;
console.log(b, typeof(b));
b = 99;
console.log("changed b =", b, typeof(b));
b = "my class";
console.log(b, typeof(b));

const c = "welcome";
console.log(c);
// c = "nepal"; // ❌ will cause error

function display() {
    console.log("display function call");
}
display();

// arrow function
const print = () => {
    console.log("print called");
};
print();

// single-line arrow function
const add = (a, b) => a + b;
let result = add(10, 15);
console.log(result); // 25

// function scope example
const subtract = (value) => {
    var subresult = value - 10;
    console.log("result =", subresult);
};
subtract(25);

// block scope example
for (var i = 0; i <= 10; i++) {
    var addres = 0;
    addres += i;

    let subres = 0;
    subres = i; // fixed
    console.log(addres, subres);
}

console.log("outside loop (var) =", addres); // works, var is function-scoped
// console.log("outside loop (let) =", subres); // ❌ ReferenceError
//array
let fruit=["apple","banana","coconut"]
fruit.forEach
(
    //callback function
    (element,index)=>
    {
        console.log("element=",element)
        console.log("index=",index)
    }
)
let newfruit=fruit.map
(
    (element,i)=>
    {
        return element.toUpperCase()
    }
)
console.log(newfruit)
let number=[19,20,5,23,7,98,2,87,69]
let filtered=number.filter
(
    (element)=>
    {
        //if true return element ,if false not return
        return element>20
    }
)
console.log(filtered)
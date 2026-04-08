"use strict";
console.log("hello");
//* string, bollean, number ///
const a = "hello";
//* Array- only fixed type , dynamic size
const arr1 = [1, 2, 3, 4, 5];
const arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr1);
console.log(arr);
//* Tuple- fixed size , fixed type
const tup = [1, "hello", 3];
console.log(tup);
//* functions (void , never, (number, bollean , string))
// void - return nothing 
function greet(name) {
    console.log(name);
}
greet("raj");
//never - function which never ends (infinte)
function err(find) {
    throw new Error("did't find anything");
}
// console.log(err("hello"))
// (number, bollean , string) - return these datatype
function intro(name) {
    return name;
}
console.log(intro("my name is raj"));
const user = {
    name: "raj",
    age: 20,
    isMale: true
};
function greetings(data) {
    console.log("hello " + data.name + "\nyour age is, " + data.age);
}
greetings(user);
//* imp datatypes - (any) , (unknown)
//any
const r = 5;
console.log(r + 5);
console.log(r.toUpperCase());
//unkown
const u = 10;
if (typeof u === "number") // without this unkown datatype will not work
    console.log(u + 5);

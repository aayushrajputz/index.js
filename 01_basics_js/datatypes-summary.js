// primitive 

//7  types

// String = string
// Number = number
// Boolean = boolean
// Null = object
// Undefined = undefined
// Symbol= symbol
// BigInt = bigint

//  js is a dynamically typed language beacuse
  // that data type of variable are determined by the value
   //the hold at runtime

   const score = 100
   const scoreValue = 100.3

   const isLoggedIn = true
   const outsideTemp = null
   let userEmail;

   const id = Symbol('123')
   const anotherId = Symbol('123')
   console.log(id === anotherId);

const bigNumber = 234384787383874344873492883982n


// reference (non - primivtive)

// array = object
// object = object

//function= object function

const heros = ["shaktiman","naagraj","dooga"];

let myObj = {
    name: "aayush",
    age: 21,
}

const myFunction = function(){
    console.log("hello world")
}

console.log(typeof id)



/ *******************stack, heap memory*************


// Stack (primitive) its returns copy , Heap(non-primitive) its returns update orignal

let myEmailId = "aayushpratapsingh001@gmail.com"

let anotherName = myEmailId 

anotherName = "aayushpratap001@gmail.com"

console.log(anotherName);
console.log(myEmailId);


let userOne ={
    email:  "prashnt840@google.com",
    UPI:  "6409327834@ybl",
    
}
let userTwo = userOne

userTwo.email = "hitesh@google.com",

console.log(userOne.email);
console.log(userTwo.email);

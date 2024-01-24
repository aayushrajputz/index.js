//singleton

//object literals
// object.create(create singleton)
const mySym = Symbol("key1")

const jsUser = {

    "full name": "aayush rajput",
    name: "Aayush",
    age : 21,
    [mySym]: "myKey1",
    location:"dhampur",
    email:"aayushrajput001.com",
    isLoggedIn: false,
    lastLoggedIn: ["monday","saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log( jsUser[mySym]);

jsUser.email = "aayyushpratapyahoo.com"
// Object.freeze(jsUser)
jsUser.email ="aayushsinghgmail.com"
// console.log(jsUser);

jsUser.greeting = function name(params) {
    console.log("hello JS user");

}
jsUser.greetingTwo = function name(params) {
    console.log(`hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

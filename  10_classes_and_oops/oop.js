const user = {
    username:"aayush",
    loginCount: 9,
    signedIn: true,

    getUserDetails: function(){
        //   console.log("got user details from database");
        // console.log(`username:${this.username}`);
        console.log(this);
    }

}


// console.log(user.username);
// console.log(user.getUserDetails());

// const promiseOne = new promise()
// const date = new Date()

function User (username,loginCount,islooggedIn){
    this.username = username
    this.loginCount = loginCount
    this.islooggedIn = islooggedIn
   
    this.greeting = () =>{
        console.log(`Welcome ${this.username}`);
    }
    
  return this

}

const userOne =  new User("aayush", 12, true)
const userTwo =  new User("chai or code",11,false)

console.log(userOne.constructor);
// console.log(userTwo);
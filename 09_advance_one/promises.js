const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    // DB calls, cryptography,network
    setTimeout(function(){
     console.log('Async task is complete')

     resolve()

    },1000)
}) 


promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log('ASYNC TAsk 2');
        resolve()
    },1000)

}).then(function(){
    console.log("Async 2 is resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
         resolve({username:"aayush",email:"aayush@.com"})
    },1000)
})

promiseThree.then(function(user){
 console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username:"aayush",password:"123"})
        }else{
            reject('ERROR: something went wrong')
        }
    },1000)


})


 const username =   promiseFour.then((user) =>{
 console.log(user);
 return user.username
}).then((username) =>{
   console.log(username);
}).catch((error) => {
console.log(error);
}).finally(() => {
    console.log("finally the promise is either resolve or rejected");
})



const promiseFive = new Promise((resolve,reject) => {
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"js",password:"12334"})
        }else{
            reject('ERROR: Js went wrong')
        }
    },1000)

});

async function consumeProiseFive(){
  try {
      const response = await promiseFive
      console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumeProiseFive()


// async function getAllUsers() {
//     try {
//         const response =  await  fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error);
//     }
// }
    

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
 return response.json()
})
.then((data) =>{
 console.log(data);
})
.catch((error) =>{
console.log(error);
})

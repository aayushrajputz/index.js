 let myName = "aayush"
 let myChannel = "chai"

// console.log(myName.truelength);



 let myHeros = ["thor", "spiderman" ]

 let heroPower = {
     thor : "hammer",
     spiderman : "sling",

     getSpiderPower: function(){
         console.log(`spiderman power is ${this.spiderman}`);
     }
  
}

Object.prototype.aayush = function(){
    console.log(`aayush is present in all objects`);
}

Array .prototype.heyAayush = function(){
    console.log(`Aayush says hello`);
}

// heroPower.aayush()
// myHeros.heyAayush()


// inheritance

const user = {
    name: 'chai',
    email : 'cjh@gmail.com'}

const teacher ={
    makeVide: true,

}

const TeachingSupport ={
    isAvalable:false,
}

const TASupport ={
  makeAssignment : 'JS assingment',
  fullTime : true,
   __proto__:TeachingSupport
}


teacher.__proto__ = user

//modern styntax

Object.setPrototypeOf(TeachingSupport, teacher)

let anotherUserName = "ChaiorCode    "

String.prototype.truelength = function(){
    console.log(`${this}`);
    // console.log(`$(this.name)`);
    console.log(`true Length is: ${this.trim().length}`);
}

anotherUserName.truelength();

"aayush".truelength()
"ice".truelength()


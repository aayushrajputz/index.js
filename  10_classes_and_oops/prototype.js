// let myName = "aayush"
// let myChannel = "chai"

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

heroPower.aayush()
myHeros.heyAayush()
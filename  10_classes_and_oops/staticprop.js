class User{
    constructor(username){
        this.username = username
    }
     logMe(){
    console.log(`Username: ${this.username}`);
  }

   createId(){
    return Math.random() * 10 + 1 
   }

}

const Hitesh = new User ("Hitesh")
console.log( Hitesh.createId());

class Teacher extends User{
  constructor(username,email){
        super(username)
    this.email = email
  }
}

const iphone = new Teacher("iphone","iphone@.com")
 console.log(iphone.createId());
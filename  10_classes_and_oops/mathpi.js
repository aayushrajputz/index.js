const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
 
console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name : "ice tea",
    price: "250",
    isAvaiable : "true"

    // orderChai : function(){
    //     console.log("chai nii bne");
    // }

}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai, 'name', {
    writable: false, 
    enumerable : true,
    configurable: false,
    iteratable : false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
        
    }
}
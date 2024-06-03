const myArr = []
// %DebugPrint(myArr)

// types of Array

// 1. continious Array
// 2. Holey Array

// these arry contains three types of element

// 1. SMI (small integer)
// packed Element
// Double(float,string,function)

const arrTwo  = [1, 2, 3, 4, 5,]
//packed_SMI_elements

arrTwo.push(6.0)
// PACKED_DOUBLE_ELEMENT

arrTwo.push('7')
// PACKED _ELEMENTS

arrTwo[10] = 11
//HOLEY_ELEMENTS(beacuse in this arr there arr gap and also have strings)

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

//bound check
//hasOwProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
//hasOwnProperty(object.prototype, 10)


//holes are very expensive in js

// optimised order
 
//IN CONTINIOUS ARRAY
//SMI > DOUBLE >PACKED


//IN HOLEY ARRAY
// H_SMI > H_DOUBLE > H_PACKED


const arrFour = new Array(3)
arrFour[0] = '1'//holey_elements
arrFour[0] = '2'//holey_elements
arrFour[0] = '3'//holey_elements

const arrFive = []
arrFive[0] = '1'//packed element
arrFive[0] = '2'//packed element
arrFive[0] = '3'//packed element
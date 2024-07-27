// Primitive 
//7 types : String , Number , Boolean , null , undefined , Symbol , BigInt 

// const score = 100
// const scoreValue = 100.3
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail; => undefined
const id  = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// const bigNumber = 345568980988456666




// Reference (Non Primitive)

//Array , Objects , Functions

const heros = ["shaktiman","spiderman","Batman"]
let myObj={
    name: "biba",
    age:22,
}

const myFunction = function(){
    console.log("Hello World");

}

console.log();
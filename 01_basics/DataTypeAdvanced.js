/* Two type of dataType catagories in term of call by value and call by reference.

 1) Primitive
 --call by value
 when we copy them from anywhere 
 the original refrence of the data is not given to you
 they give the copy of refrence
 and the changes done is in copy 
7 types : 
String
number
boolean
null
undefined
symbol -- to make a value unique
bitInt

2) Non- primitive or refrence type
directly allocate the refrence in the memory

Array
objects
functions

JavaScript is dynamically typed.

This means that variables in JavaScript 
do not have a fixed type and can 
hold values of any type at any time. 
You can assign a value of one type 
to a variable and then reassign a
 value of a different type to the 
 same variable without any issues.

 */

 // Primitive
 const score = 100
 const scorevalue = 100.88
 const IsLoggedIn  = false
 const temp = null
 let username

 const id = Symbol('123')
console.log(typeof id) //symbol
const anotherId = Symbol('123')
// both are diffrent 
console.log(id===anotherId);

const bigNumber = 1213123426871n



//Refrence Type

const heros = ["ironman","doga","hulk"] //array

// objects
let myObj  = {
    name:"Rishabh",
    age:23
}


// function

const myfunction = function(){
    console.log("Hello World");
    
}


// ** Typeof null value gives Object

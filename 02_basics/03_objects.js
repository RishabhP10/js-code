// singleton 
//object.create



// object literals
// objecr creation
// myArraya = ["r","i"]
// myArray[1] for array 

// for object we can define key as well as value


const mySym = Symbol("Key1")
const mySym1 = Symbol("Key2") 


const JSuser = {
    mySym : "mykey1",
    [mySym1] : "mykey2",
    name : "Rishabh",
    age : 21,
    location : "nagpur",
    email : "ris@gmail.com",
    isLoggedin : false,
    lastloginday : ["Monday" , "Tuesday"],
    "FULL NAME" : "Rishabh Pathak"

}  

// console.log(JSuser.age);
// console.log(JSuser[email]);
// console.log(JSuser["email"]); //as a string
// no other way to describe "full name"
// console.log(JSuser["FULL NAME"]);
// console.log(JSuser.mySym);
// console.log(typeof JSuser.mySym);
// console.log(JSuser[mySym1]);
// console.log(typeof JSuser[mySym1]);

JSuser.email = "rpathak@google.com"
// Object.freeze(JSuser) // freeze the value 
JSuser.email = "rpathak@microsoft.com"
// console.log(JSuser);

JSuser.greeting = function(){
    console.log("hello jsuser");
    
}

JSuser.greetingtwo = function(){
    console.log(`hello jsuser , ${this.name}`);
    
}


console.log(JSuser.greeting()); 
console.log(JSuser.greetingtwo()); 

/* usually we access objects using dot operator
but in some cases we use square bracket
*/

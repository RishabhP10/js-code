// defination

// function saymyName(){
//     console.log("R");
//     console.log("i");
//     console.log("s");
//     console.log("h");
//     console.log("a");
//     console.log("b");
//     console.log("h");
    
// }

// saymyName // ----> Reference
// saynyName() // ----> Excecution

// saymyName()

// function addTwoNumbers(number1 , number2){
//     console.log(number1+number2);
    
// }
// addTwoNumbers(2,4)
// addTwoNumbers(2,"4")
// addTwoNumbers(2,"a")
// addTwoNumbers(3, null)

/* when we make a function these are parameters
and when we pass the value those are called arguments
*/


// const result = addTwoNumbers(10,20)
// console.log("Result : " , result);

// ---- 2nd CASE---
// function addTwoNumbers(number1 , number2){
//     let result  = number1+ number2
//     return result
    
// }
// const result = addTwoNumbers(10,20)
// console.log("Result : " , result);

//----3RD CASE--
// function addTwoNumbers(number1 , number2){
//     //let result  = number1+ number2
//     return number1+ number2
    
// }
// const result = addTwoNumbers(10,20)
// console.log("Result : " , result);

// scope both the result are different

// -----4rt CASE---------

// function addTwoNumbers(number1 , number2){
//         let result  = number1+ number2
//         return result
//         console.log("hi");
        
// }
// this console log is not get print
// because after the retrun in function nothing got printed


function loginUserMessage(username = "USER"){
    if(username === undefined) /*(!username)*/ {
        console.log("Please Enter User Name");
        return
        
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Rishabh"))
console.log(loginUserMessage())
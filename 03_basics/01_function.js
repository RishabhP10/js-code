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


// function loginUserMessage(username = "USER"){
//     if(username === undefined) /*(!username)*/ {
//         console.log("Please Enter User Name");
//         return
        
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Rishabh"))
// console.log(loginUserMessage())


// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(20));


// to create a bundle of the prices
// REST OPERATOR
// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(20,200,2000));

// function calculateCartPrice(val1, val2 ,...num1){
//     return num1
// }
// console.log(calculateCartPrice(20,200,300,2000));



const user = {
    username : "Rishabh",
    price : 111
    //prices : 111
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username}
        and Price is ${anyobject.price}`);
    

}

// handleObject(user)
handleObject({
    username: "Rakesh",
    price : 888
})


const myNewArray = [200,800,900,700]


function returnSecondValue(getArray){
    return getArray[0]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([280,300,900,8000]
));

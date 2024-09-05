// Immediately Invoked Function Expression (IIFE)

// function Tea(){
//     console.log("DB CONNECTED");
    
// }
// Tea()

// (function Tea(){
//     console.log("DB CONNECTED");
    
// })()

/* global scope ke pollution se problem hoti hai kai baar
toh jo global scope ke variable ya jo bhi declare hua hai
uske pollution ko hatane ke liye
humne "iife" ka use kiya */
// () function defination and () execusation



// they dont know where to end so we have to put semicolon


(function Tea(){
    console.log("DB CONNECTED");
    
})();

(function Tcoffee(){
    // NAMED IIFE
    console.log("DB CONNECTED TWO");
    
})();

( () => {
    console.log("DB CONNECTED THREE");
    
})();

( (name) => {
    console.log(`DB CONNECTED FOUR ${name}`);
    
})("Rishabh")
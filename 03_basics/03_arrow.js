// refers the current context : this 

const user = {
    username : "Rishabh",
    price : 999,
    

    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to Website`);
        console.log(this);
        
    }

}
// user.welcomeMessage()
// user.username = "Rakesh" // we change the context , we didnt hardcode 
// user.price = 444
// user.welcomeMessage()

// here this refers to the global context
//  nothing on the global
// console.log(this);

/* in browser this refers to the windows */



// function one(){
//     let username = "Rishabh"
//     console.log(this.username);
    
// }

// one()

// const one = function (){
//     let username = "Rishabh"
//     console.log(this.username);
    
// }

// one()

// ARROW FUNCTION ------------------
const Tea = () => {
    let username = "Rishabh"
    console.log(this);

}

// Tea()


// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// console.log(addTwo(1,2));


// implicet Return

// const addTwo = (num1,num2) => num1 + num2
// const addTwo = (num1,num2) => (num1 + num2)
// if you write curly brases then you must write return 

const addTwo = (num1,num2) => ({username : "Rishabh"})
console.log(addTwo(1,2));


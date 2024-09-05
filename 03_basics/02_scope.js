// let a = 10
// const b = 20
// var c  = 30
// console.log(a);
// console.log(b);
// console.log(c);

// {} --> scope

if (true){
    let a = 10
    const b = 20
    var c  = 30
}
// console.log(a);
// console.log(b);
// console.log(c);

/* the value are inside the scope still "var" 
is printing , that's why we avoid to use "var" */

let a  = 900
if (true){
    let a = 10
    const b = 20
    // console.log("Inner Console" , a);
    
}

// console.log("Outer Console " , a);


// CHILD FUNCTION ACCESS THE PARENT FUNCTION 
function one(){
    const username = "Rishabh"

    function two(){
        const website = "Netflix"
        console.log(username);
        
    }
    // console.log(website);
    
    two()
}
// one()


if (true){
    const username = "Rishabh"
    if(username === "Rishabh"){
        const website = " Netflix"
        // console.log(username + website);
        
    }

    // console.log(website);
    
}

// console.log(username);




// ------------- Interesting --------



console.log(addone(3));

function addone(num){
    return num + 1
}

// addone(3)

// Expression -------------

// Hosting

/* In this kind of function decleration 
we store the value inside a variable 
thats why if we log before the function decleration 
it wont print ( cannot access) */

console.log(addTwo(5));

const addTwo = function(num){
    return num + 2

}
// addTwo(5)
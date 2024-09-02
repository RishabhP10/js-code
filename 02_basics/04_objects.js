// const tinderUser = new Object()  //singleton object
const tinderUser = {}  // non singleton object



tinderUser.id = "123ABS"
tinderUser.name = "ron"
tinderUser.isLoggedIn = false
// console.log(tinderUser)


const regularUser = {
    email: "any@gamil.com" ,
    fullname : {
        userfullname :{
            firstname: "Rishabh",
            lastname : "Pathak"

        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);
// optional Chaining ..
// console.log(regularUser.fullname?.userfullname.firstname);


const obj1 = {1:"a", 2:"b"}


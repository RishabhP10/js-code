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

// console.log(regularUser.fullname.userfullname.firstname);
// optional Chaining ..
// console.log(regularUser.fullname?.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}


// const obj3 = {obj1 , obj2}
// object inside objects
// console.log(obj3);

// const obj3 = Object.assign(obj1,obj2)
// good practice empty value ,target and other is source
// const obj3 = Object.assign({},obj1,obj2)

// spered operator...
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const user = [
    {

    },
    {

    },
    {

    },
]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));  // result in boolean



const course = {

    coursename: "js",
    courseprice: 999,
    courseInstructor: "Rakesh"
    
}

const {courseInstructor} = course
const {courseInstructor: Instructor} = course

console.log(Instructor);

// API..............
// {
//     "NAME" : "Rishabh Pathak",
//     "GENDER" : "Male",
//     "Price" : "Free"
// }

// In the form of array
// [
//     {},
//     {},
//     {}
// ]



const coding = ["react","js","rb","cpp","py","java"]


// callback funtion : no name
// coding.forEach( function (item) {
//     console.log(item);
    
// })

// arrow function----

// coding.forEach( (item) => {
//     console.log(item);
    
// })



// function printme(item){
//     console.log(item);
    
// }

// coding.forEach(printme)


coding.forEach( (item,index,arr) => {
    console.log(item,index,arr);
    
})


const myCoding = [ 

    {languageName : "JavaScript",
    languageFileName : "JS"
},
    {
languageName : "Ruby",
    languageFileName : "rb"
    },
    {
languageName : "JPython",
    languageFileName : "py"
    },




]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
    
})
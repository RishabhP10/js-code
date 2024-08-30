// let myDate = new Date()
// console.log(myDate);
// console.log(typeof myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());


// month are starting from ZERO in java script
// let newDate = new Date(2024,8,27)
// console.log(newDate.toDateString())
// let newDate = new Date(2024,8,27,5,3)
// console.log(newDate.toLocaleString);
// let anotherDate = new Date("01-23-2024")
// console.log(anotherDate.toLocaleString);



// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// values in milliseconds
// console.log(anotherDate.getTime());


// for the values in seconds and floor for value not in decimals
// console.log(Math.floor(Date.now()/1000))



let firstDate = new Date()
console.log(firstDate);
console.log(firstDate.getMonth());
console.log(firstDate.getDay());

firstDate.toLocaleString('default' , {
    weekday: "long",
})
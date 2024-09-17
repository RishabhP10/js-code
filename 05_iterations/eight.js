// Accumalator------

const myNums  = [1,2,3]

// const  Value = myNums.reduce( function (acc , currval) {
//     console.log(`Acc : ${acc} current value : ${currval} `);
    
//     return acc + currval
// }, 0)


// Arrow Function ----------

const Value = myNums.reduce ( (acc, currval) => {return acc + currval} , 0)

console.log(Value);



const ShoppingCart = [
    {
        CourseName : "Devops",
        price : 599
    },
    {
        CourseName : "Python",
        price : 1099
    },
    {
        CourseName : "Java",
        price : 499
    },
    {
        CourseName : "DataScience",
        price : 1299
    },
    {
        CourseName : "JS",
        price : 599
    },
    {
        CourseName : "FullStack",
        price : 1599
    },
    {
        CourseName : "SpringBoot",
        price : 899
    },
    {
        CourseName : "React",
        price : 299
    },
]

const PriceAddition = ShoppingCart.reduce( (acc , item) => acc + item.price , 0)
console.log(PriceAddition);

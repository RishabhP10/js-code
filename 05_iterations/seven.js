const MyNums = [1,2,3,4,5,6,7,8,9,10]

// const value = MyNums.map( (number) => number + 10 )


// CHAINING--------

const Value = MyNums
            .map( (num) => num * 10)
            .map( (num) => num + 3)
            .filter( (num) => num > 50)
console.log(Value);

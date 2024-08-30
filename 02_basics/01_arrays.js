const myArr = [0,1,2,3,4,5]
// console.log(myArr[1]);
// const myHeros = ["ironman" , "hulk"]
const myArr1 = new Array(1,2,3,4,5)

// console.log(myArr1[0])

// myArr.push(6)
// myArr.push(7)
// myArr.pop()


// myArr.unshift(9)

// myArr.shift()


// console.log(myArr.indexOf(18))
// console.log(myArr.includes(9))
// console.log(myArr);


// console.log(myArr)

// const newArr1 = myArr.join()
// console.log(myArr)
// console.log(newArr1);
// console.log(typeof newArr1);


// slice and splice

/* Slice do not manuplilate the original array
while splice manupilate the array
*/
console.log("A Original Array" , myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B where we use SLICE" , myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C where we use SPLICE" , myArr);

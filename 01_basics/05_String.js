const name = "rishabh"
const repoCount = 1

console.log(name+repoCount+ "values");
// readable syntex 
// String interpolation

console.log(`Hello my name is ${name} and my count is 
    ${repoCount}`);

    // object create
// const gameName = new String('Rishabh')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('h'));

const gameName1 = new String('Rishabh-Pathak')
console.log(gameName1.length);

const newString = gameName1.substring(0,4)
console.log(newString);

const anotherString = gameName1.slice(-15,5)
console.log(anotherString);



//const newString1 = "   hi  rishabh   "
const newString1 = "     rishabh   "
console.log(newString1);
console.log(newString1.trim());

const url = "https://rishabh.com/rishabh%20pathak"
console.log(url.replace('%20','-'));
console.log(url.includes('rishabh'));
console.log(url.includes('hi'));

console.log(gameName1.split('-'));

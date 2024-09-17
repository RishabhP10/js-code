// for of
// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]
for(const num of arr){
    // console.log(num);
    
}

const greetings = "hello world"
for(const greet of greetings){
    if(greet == " ")
        continue
    
    // console.log(`Each chat is ${greet}`);
    
    
}

// Map......

// unique value and order in same 

const map = new Map()
map.set('IN', "India")
map.set('FR', "France")
map.set('USA', "United State")
map.set('FR', "France")

// console.log(map)


for (const [key, value] of map) {
    // console.log(key , ':-' , value) ;   
}
// MAP IS NON ITERATABLE ..........
// so we cannot write a for in loop 



const myObject = {
    'game1' : 'GTA',
    'game2' : 'NFS'
} 
// for object it not work
// for(const [key, value] of myObject){
//     console.log(key , ':-' , value);
    
// }

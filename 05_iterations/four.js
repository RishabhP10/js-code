const myObject  = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'

}

// for in loop basically for object

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)
    
}


// let check it for array (for in)

const programming = ["js","rb","py","java","cpp"]
// for in------------
for(const key in programming){
    console.log(key);
    // only key is print
}
// how to find the value-------
for(const key in programming){
    console.log(programming[key]);
    // only key is print
}
// for of----------
for(const key of programming){
    console.log(key);
    // value is print
}
// FOR
// ctlr + d ==> duplicate
for (let i = 0; i <= 10 ; i++) {
    const element = i;
    if(element == 4){
        // console.log("4 is best number");
        
    }
    // console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`------Table of ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop ${j} and the outer loop ${i}`);
        // console.log(`${i} * ${j} = ${i*j}`);
        
        
    }
    
    
}



let myArray = ["Flash" , "Batman" , "Superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
    
}


// Keywords..
//  Break and Continue


// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`Detected 5`);
//         break

        
//     }



//     console.log(`value of i is ${index}`);
    
    
    
// }


for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        continue

        
    }



    console.log(`value of i is ${index}`);
    
    
    
}
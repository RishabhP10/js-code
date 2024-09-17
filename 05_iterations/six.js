// const coding = ["react","js","rb","cpp","py","java"]

// const values = coding.forEach( (item)=> {
//     console.log(item);
//     return item
// })

// console.log(values);


const myNumber = [1,2,3,4,5,6,7,8,9,10]

// const result = myNumber.filter( (num) => num > 5 )

// explicit return
// const result = myNumber.filter( (num) => { return num > 5 })
// console.log(result);


const newNums = []
myNumber.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
})
// console.log(newNums);


let Books = [
    {
        title : "Book1" , genre : "Histroy" , publish : 2000 , edition : 2008
    },
    {
        title : "Book2" , genre : "Civis" , publish : 2010 , edition : 2018
    },
    {
        title : "Book3" , genre : "Geo" , publish : 2001 , edition : 2009
    },
    {
        title : "Book4" , genre : "Histroy" , publish : 1985 , edition : 2008
    },
    {
        title : "Book5" , genre : "Geo" , publish : 1998 , edition : 2011
    },
    {
        title : "Book6" , genre : "Civis" , publish : 2013 , edition : 2024
    },
    {
        title : "Book7" , genre : "Histroy" , publish : 2010 , edition : 2020
    },
    {
        title : "Book8" , genre : "Civis" , publish : 1991 , edition : 2006
    }

];

let userInfo = Books.filter( (Bk) => Bk.title === 'Book1') 

userInfo = Books.filter( (Bk) => Bk.publish > 1991 && Bk.genre === 'Civis')

console.log(userInfo);

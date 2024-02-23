// falsy values are ----> undefiend,null,NaN,+0,-0,0,false,"",document.all

// truthy values are -----> -12 ,"vikas",0.99, etc


// console.log(!undefined); // --> Undefiend is falsy value but ! this sign turn  it true this ! is called not

// console.log(!null);  // --> null is falsy value but ! this sign turn  it true this ! is called not

// console.log(!false); // --> true is falsy value but ! this sign turn  it true this ! is called not

// let str=""
// console.log(!str); // --> Empty string is a  falsy value but ! this sign turn  it true this ! is called not

// if (null) {
//     console.log("truthy");
// }else{
//     console.log("falsy");
// } // --> null is a  falsy value and return false so the else block will execute


// == this is called Abstract Equality Comparison ,,IN this if data types are not same then it will Coercion and then compare

// === This is called Strict Equality Comparison ,,


// console.log(null == undefined);

// console.log(undefined == null)

// console.log(12 == "12");    // --> true because Tonumber running on string turning into number because 12 is a valid number

// console.log(false==0);    // --> Tonumber runing on false returning +0  which is equal to 0 that's why it returns true

// console.log(true == 1); // --> Tonumber runing on true returning 1  which is equal to 1 that's why it returns true


// console.log(true == false); // --> Tonumber runing on true and false returning true =1 ,,false ==0  which is notequal  that's why it returns false

// let obj ={
//     x:10,
//     valueOf(){
//         return 10
//     }
// }

// console.log("10"==obj);    // --> true because Toprimitive runing on obj if hint is number it will return number AND Tonumber will run on 10 converting it into number


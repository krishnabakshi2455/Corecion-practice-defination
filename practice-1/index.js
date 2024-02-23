// Coercian type conversion using to number on string because of - sign
// console.log("10"-5);
// console.log(15-"10.5");

// Because of + sign no conversion occurs because + is the sign of concatination
// console.log("5" + 5);

// To number method running on both the string and converting them into number because of - sign
// console.log("20"-"10");

// To number method running on string but xyz is not a valid number so invalid number = NaN
// console.log(10-"xyz");

// To number method runnig on both string but xyz is not a valid number and inavlid number = NaN number so only 10 converted into a number
// console.log("10"-"xyz");

// To number method running on undefined converting into NaN and NaN - 10 = NaN
// console.log(10-undefined);

// To number method running on both converting Undefined into NaN and Null into 0, so  NaN - 0 = NaN
// console.log(undefined-null);

// To number method running on both converting null into 0 and false into 0 aswell, So 0 - 0 = 0
// console.log(null - false);

// This gives an error [object,object] to solve this overwrite the tostring method
// let obj1 = {}
// console.log(obj1.toString());

// THIS return the object itself
// console.log(obj1.valueOf());

// Here we overwrite the value of this methods to solve this error "[object,object]"
// let obj = {
//     toString(){
//         return "Krishna"
//     },
//     valueOf(){
//         return 100
//     }
// }
// console.log(obj.toString());
// console.log(obj.valueOf());

// To number running on obj and throws you to Topremitive if preferred type is not present  it will be default and default is number and from number to OrdinaryToPrimitive and first tostring will run and will return "[object,object]" this is a valid string  then string will convert to invalid number/NaN then,100-NaN = NaN
let obj ={}
console.log(100-obj);

// since its object Topremitvie will run  if preferred type is return then OrdinaryToPrimitive wil run and then tostring will run and will return "[object,object]" but i already overwrite tosting returning 10, so 100 - 10 = 90
// let obj={
//     toString(){
//         return 10
//     }
// }
// console.log(100-obj);

// since its object Topremitvie will run  if preferred type is return then OrdinaryToPrimitive wil run and then valuOf will run  but i already overwrite tosting returning 100 in string so again To number will run returning 100 in number
// let obj = {
//     valueOf(){
//         return "100"
//     }
// }
// console.log(obj-80);

// since its object Topremitvie will run  if preferred type is return then OrdinaryToPrimitive will run then tostring will run returning "[object,object]" then valuOf will run converting "[object,object]" into number returning NaN then, Nan - Nan = NaN
// let obj={}
// let obj2={}
// console.log(obj-obj2);


//  since obj is object Topremitvie will run  if preferred type is return then OrdinaryToPrimitive wil run then first tostring will run returning 10 because i overwrited the method and then valueOf will run on 10 returning 10 asitis || Then  obj2 is object Topremitvie will run  if preferred type is not present  it will be default and default is number and if its number OrdinaryToPrimitive wil run then first tostring will run returning
// let obj={
//     toString(){
//         return 10
//     }
// }
// let obj2={
//     valueOf(){
//         return "100"
//     }
// }
// console.log(obj-obj2);
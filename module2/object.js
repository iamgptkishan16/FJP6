//empty object
let obj = {};
console.log(obj);
//object concepts
let objKishan = 
{
    NAME : "Kishan Kumar",
    AGE : 21,
    PHONE_NUMBER : 9110991858,
    COURSE : "BTECH",
    "PHONE NUMBER" : 9117393069
}
console.log(objKishan);

let kashi = {
    Name : "Kishan Kumar",
    Age : 21,
    Address: {
        City: "Saharsa",
        State: "Bihar",
        Pincode: 852106
    },
    Friends: ["ALOK", "SATYAM", "ADARSH"],
    sayHi : function(){
        console.log("Hii");
    }
}
console.log(kashi);

//printing only name 

console.log(kashi.Name);
console.log(kashi.sayHi);
console.log(kashi.Address.city);
console.log(kashi.Address.City);
console.log(kashi.sayHi());// it will print undefined as the function is not returning anything. In function above, we have consoe.log not anything returning.
// for function, we can directly call it here
kashi.sayHi();

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
    isEngineer: false,
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
console.log(kashi.sayHi());// it will print undefined also along with Hii, as the function is not returning anything. In function above, we have consoe.log not anything returning.
// for function, we can directly call it here
kashi.sayHi();
console.logh
// adding a new key in obj
kashi.education= ["D.A.V", "J&M Academy", "KEC" ];
console.log(kashi);
console.log(kashi.education);

//deleting a key from the object
console.log("Object before deletion of the key :", kashi);


delete kashi.Friends;
console.log("Object after deletion of key :", kashi);

//updatation of keys

console.log("Object before updatation :", kashi);
kashi.isEngineer =  true;
console.log("Object after updatation :", kashi);
// second method to access an key

console.log(kashi.Name);// 1st method
console.log(kashi["Name"]);//2nd method
console.log(kashi["Address"]["Pincode"]);


let str = "Namaste Bharat!"
console.log(str);

//length
let len = str.length;
console.log(len);

//slice method --- extract the part of the string

let slicedArr = str.slice(3, 6);
console.log(slicedArr);

//replace method -- replace a part with given word

let replacedArr = str.replace("Bharat", "Hindustan");
console.log(replacedArr);
console.log(str); // original string will not get changed

//uppercase 
let uppercaseStr = str.toUpperCase();
console.log(uppercaseStr);

let lowercaseStr = str.toLowerCase();
console.log(lowercaseStr);

//concat

let firstName = "Kishan";
let lastName = " Kumar";
let fullName = firstName.concat(lastName);
console.log(fullName);
let fullName1 = firstName + lastName;
console.log(fullName1);

//split

let splitted = str.split(" ");
console.log(splitted);
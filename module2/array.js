//empty array

let arr = [];
console.log(arr);


//array with elements

let eleArr = [1,2,3,4, "Namaste Bharat", 'c',4.5, true, false ]
console.log(eleArr);

console.log("Element at 4th Index :" + eleArr[4]);
console.log("Element at 7th Index :" + eleArr[7]);

eleArr[5] = "Nothing";
console.log("The updated array is :" + eleArr);
console.log(eleArr);


console.log("----------------------------------------------------------------")
// Array Method
//1. push  (add items in an array at last index.)

console.log("Array before push :" + eleArr);
eleArr.push("Namaste Hindustan");
console.log("Array after push :" + eleArr);
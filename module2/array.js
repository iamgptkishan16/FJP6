//empty array

let arr = [];
console.log(arr);


//array with elements

let eleArr = [1,2,3,4, "Namaste Bharat", 'c',4.5, true, false ]
console.log(eleArr);

console.log("Element at 4th Index :" + eleArr[4]);
console.log("Element at 7th Index :" + eleArr[7]);

eleArr[5] = "Nothing, OK";
console.log("The updated array is :" + eleArr);
console.log(eleArr);


console.log("----------------------------------------------------------------")
// Array Method
//1. push  (add items in an array at last index.)

console.log("Array before push :" + eleArr);
eleArr.push("Namaste Hindustan");
console.log("Array after push :" + eleArr);

console.log("----------------------------------------------------------------")
//2. pop (removes items from the last index from an array)

console.log("Array before pop :" + eleArr);
eleArr.pop();
console.log("Array after pop :" + eleArr);


console.log("----------------------------------------------------------------")
//3. shift (remove items from the first index)

console.log("Array before shift :" + eleArr);
eleArr.shift();
console.log("Array after shift :" + eleArr);


console.log("----------------------------------------------------------------")
//4. unshift()
console.log("Array before unshift :" + eleArr);
eleArr.unshift("new item added");
console.log("Array after unshift :" + eleArr);


console.log("----------------------------------------------------------------")
//5. length

let len = eleArr.length;
console.log(len);




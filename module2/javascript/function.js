//function in js without parameter and return type

function sayHello(){
    console.log("Namaste Bharat");
}
sayHello();




//function with return type

function sum(num1, num2){
    return num1+num2;
}
let add = sum(3, 8);
console.log("Sum = " + add);


//storing function in variable
let store = function(num1, num2){
    return num1 - num2;
}
console.log(store(5, 8)); //functions are first class citizen in js as it can be stored in variables

// function with parameter
function sum(num1, num2){
    let addition = num1+num2;
    console.log("Addition is = " + addition);
}
sum(2,3);

//IIFE (Immediately invoked function expression)

(function(){
    console.log("Namaste Bharat!!");
})();

//IIFE with parameter

(function(num1, num2){
    let plus = num1+num2;
    console.log("Sum is + "+ plus);
})(6, 9);
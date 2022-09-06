// printing in javascript

console.log("Namaste Bharat");
// variables in javascript

let a = 10;
console.log(a);//integer

let char = "abc";
console.log(char);//character

let str = "I am Kishan Kumar";
console.log(str);//string

let bool = true;
console.log(bool);//boolean

for(let i = 1; i <6; i++){
    console.log(i); 
}   //for loop


let count = 10
while(count > 0){
    console.log(count);
    count--;
} //while loop

//is prime

let num = 4;
let isPrime = true;

for(let i = 2; i*i <= num; i++){
    if(num%i == 0){
        isPrime = false;
    }
    
}
if(isPrime == true){
    console.log("Number is Prime Number");
} else {
    console.log("Number is not Prime Number");
}
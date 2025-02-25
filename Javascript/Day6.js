//reverse string
let str = "hello";
let rev = "";
for (let i = str.length - 1; i >= 0; i--){
    rev += str[i];

}
    
console.log(rev);
//even numbers in a list
let arr = [23, 54, 67, 64, 46, 95, 98];
for (let num of arr){
    if (num % 2 === 0){
        console.log(num);

    }

} 
//max number
let numStr = "258309";
let max = Number(numStr[0]);
let maxIndex = 0;
for (let i = 1; i < numStr.length; i++) {
    if (Number(numStr[i]) > max) {
        max = Number(numStr[i]);
        maxIndex = i;
    }
}
console.log(max, maxIndex);

//prime number
for (let num = 2; num <= 50; num++) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(num);
}

//for of for objects
let obj = { name: "John", age: 25, city: "New York" };
for (let key of Object.keys(obj)) console.log(key);
for (let value of Object.values(obj)) console.log(value);
for (let [key, value] of Object.entries(obj)) console.log(`${key}: ${value}`);

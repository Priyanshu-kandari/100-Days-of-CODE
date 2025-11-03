let age = 30;

//if-else
if(age>=18){
    console.log("eligible for vote");
}else{
    console.log("not eligible");
}
//eligible for vote


//if-else if-else
if(age<18){
    console.log("kid");
}else if(age>45){
    console.log("mid age");
}else{
    console.log("old");
}
//old


//multiple condition (switch)
switch(new Date().getDay()){
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thrusday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    default:
        console.log("some kinda error");
}



//loops
//for loop
for(let i = 0;i<5;i++){
    console.log("priyanshu kaisa hai mere bhai");
}

//sum of first n number: 10 number
let sum = 0
for(let i = 1; i<=10;i++){
    sum = sum + i
}
console.log(sum);


//while loop
let i = 1;
while(i<6){
    console.log(i);
    i++
}

//ittrating array
let arr = [1,2,3,4,56,45]
for(let i = 0;i<arr.length;i++){
    console.log(arr[i]);
}
    

const obj = {
    name:"rohit",
    age:30,
    amount:420,
    city: "kotdwar"
}

// for in loop
const key = Object.keys(obj);
[ 'name', 'age', 'amount', 'city' ]
for(let i=0;i<key.length;i++)
{
    console.log(obj[key[i]]);
}

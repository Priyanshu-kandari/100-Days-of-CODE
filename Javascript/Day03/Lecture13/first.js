// Scope

//global scope
let a = 10;
var b = 20;
const c = 30;

console.log(a);
console.log(b);
console.log(c);

function greet(){
    console.log(a);
    console.log(b);
    console.log(c);
}


//local scope
if(true){
    let a = 10;
    // var amount = 20;
    const c = 30;  
}

console.log(amount);

for(let i=0;i<5;i++){
    console.log(i);
}


console.log(i);

console.log(a);
let amount = 20;
const b= 30;
var d = 50;

if(true){
    let amount =30;
    console.log(amount);
}

greet();



function greet(){
    console.log("Hello Greet");
}


// meet();
const meet = function(){
    console.log("Hello Meet");
}

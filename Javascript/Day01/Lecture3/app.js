//non Primitive datatype
//array,Object,Function

//array 
let arr = [10,20,30];
console.log(arr);
console.log(typeof arr);

//object
let obj = {
    username: "Priyanshu",
    account_balance: 10000,
    account_ID:65656565
}
console.log(obj);

//Function
let fun = function(){
    console.log("Hello coder army");
}
fun()
console.log(fun);


//type conversion
let account_balance = "100"
console.log(typeof account_balance);

let num = Number(account_balance)
console.log(typeof num);

//boolean convert to number
let x = false
console.log(Number(x));


let account = "100xs"
let bal = "200s"
console.log(Number(account));
console.log(Number(bal));

//null conversion
let x1 = null;
console.log(Number(x1));

//undefined
let x2;
console.log(Number(x2));

//convert to string
let ab = 20;
console.log(typeof String(ab));

// convert to boolean
let abc = "Priyanshu"
console.log(Boolean(abc));



let sum = 200;
//sum++ Post increment, sum-- post decrement
//--sum pre decrement, ++sum pre increment
console.log(sum++); //200
console.log(sum);   //201

console.log(++sum); //202


//for of loop
const arr = [10,20,11,18,13];
for(let value of arr){
    console.log(value);
    // 10
    // 20
    // 11
    // 18
    // 13 
}


const str = "kandari hai kyaa!!!";
for(let value of str){
    console.log(value);
    // k
    // a
    // n
    // d
    // a
    // r
    // i
 
    // h
    // a
    // i
 
    // k
    // a
    // a
    // !
    // !
    // !    
}

const customer = {
    name:"priyanshu",
    age: 18,
    accountno: 68686868,
    balance: 2000}

// for(let value of obj){
//     console.log(value);  //error , reason because obj is not itteratable 
// }


for(let value of Object.keys(customer)){
    console.log(value);
    // name
    // age
    // accountno
    // balance 
}
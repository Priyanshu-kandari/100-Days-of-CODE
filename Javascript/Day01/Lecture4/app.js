// comparison operator


//number to number
let a1 = 1;
let a2 = 2;
console.log(a1 == a2); //false
console.log(a1>a2);  //false
console.log(a1<a2);  //true

let num = 10;
let str = "20"
console.log(num < str); //True


// === type check
console.log(num === str); //false

//null == undefined //true
//null === undefined //false
// null can only be equivalent to undefined

console.log(null==0); 
console.log(null<0);
console.log(null>0);
console.log(null<=0);
console.log(null>=0);

// undefined comparison
console.log(undefined==0);
console.log(undefined<0);
console.log(undefined>0);
console.log(undefined<=0);
console.log(undefined>=0);

console.log(NaN==NaN);
let str3 = "rohit"; 
let str4 = "moahan"; 

console.log(Number(str3));


let abc1 = 123;
let abc2 = "123";
let abc3 = 123;
console.log(abc1==abc2==abc3); //false

let age = 18;
let money =420;
console.log(age<18&&money>200); //AND
console.log(age>10 || money>200) //OR
console.log( !(age>10));  //NOT



//  bitwise operartor
console.log(4&5);
console.log(11&14);
console.log(11|14);
console.log(5^7);
console.log(5<<3);
// 5 multiply by 2 power 3 // left shift
// 101.0000000000000000
// 101000.0000000

console.log(20>>2);
// right shift , 20 divided by 2 power 2
// 10100.000000
// 101.0000000


let num1 = 231
let num2 = new Number(231)
let num3 = new Number(231)
console.log(num2);  //[Number: 231]
console.log(typeof num2);  //object
console.log(num1==num2);  //true
console.log(num2==num3);  //false


let num = 23.1354365
console.log(num.toFixed(5));  //23.13544
console.log(num.toPrecision(4)); //23.14
console.log(num.toExponential(2));  //2.31e+1
console.log(typeof num.toString());  //string
console.log(num.valueOf()); //23.1354365



//Math
console.log(Math.E); //2.718281828459045
console.log(Math.LN10); //2.302585092994046
console.log(Math.PI); //3.141592653589793



//floor and ceil
console.log(Math.floor(num));  //23
console.log(Math.ceil(num));   //24


//random
console.log(Math.random());
// 0<=value<1
console.log(Math.floor(Math.random() * 10)); 
// 0-9
console.log(Math.floor(Math.random() * 10)+1); 
// 1-10
console.log(Math.floor(Math.random() * 10)+11); 
// 11-20

//random max-min
// console.log(Math.floor(Math.random())*(max-min+1)+min);

//max 40  min 20
console.log(Math.floor(Math.random()*40-20+1)+20);
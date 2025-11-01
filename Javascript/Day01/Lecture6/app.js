//Primitive datatype
// const num = 10;
// num = 20;
// console.log(num);  //ERROR

//Non-Primitive Datatype
 obj = {
    id:10,
    balance:200,
}

obj.id = 11
console.log(obj);

let obj2 = {
    id:20,
    money:30
}

obj = obj2
console.log(obj);


//str in js
let str1 = "hello coder army"
let str2 = 'hello kyaa haal chaal'
let str3 = `hellooooo mitron`
let Price = 50
console.log(`Price of the tomato is ${Price}`);


//string concatentaion
let s1 = "hello";
let s2 = "coder army";
let s3 = s1+s2
console.log(s3);

//string length
console.log(s3.length);


//print "hello"
console.log('"hello"');

let message = "rohit bhaiya bhot bade insaan h,\naur bure bhi"
console.log(message);

let comment = "rohit bhaiya bhot bade insaan h,\\naur bure bhi"
console.log(comment);

let special = "rohit"
console.log(special[0]); //r
console.log(special[1]); //o
console.log(special.charAt(3)); //i

//toLowerCase
//toUpperCase
console.log(special.toLowerCase());  //rohit
console.log(special.toUpperCase());  //ROHIT
console.log(special);  //rohit

let strtemp = special.toUpperCase()
console.log(strtemp); //ROHIT


//indexof, Lastindexof
let hero = "hello coder army coder"
console.log(hero.indexOf("coder"));  //6
console.log(hero.lastIndexOf("coder"));  //17
console.log(hero.indexOf("CODER")); //-1 Because its not available

//includes
console.log(hero.includes("coder"));  //TRUE


//slice
let newstring = "hello wassup"
console.log(newstring.slice(0,3));  //hel
console.log(newstring.slice(-10,10));  //llo wass


//substring
console.log(newstring.substring(1,3));  //el
console.log(newstring.substring(-10,10));  //hello wass  start act as 0


//Replace
let str10 = "hello ji kaise ho ji";
console.log(str10.replace("ji", "money"));  //hello money kaise ho ji
console.log(str10.replaceAll("ji","money"));  //hello money kaise ho money

//split (delimiter)
let newstr = "Priyanshu! Raman! Hiral! Bhumi"
console.log(newstr.split("!")); //[ 'Priyanshu', ' Raman', ' Hiral', ' Bhumi' ]

//trim
let str12 = "   hello ji  "
console.log(str12.trim().length); //8

//new way to create string
let lateststring = new String("hello coder army")
console.log(lateststring);  //[String: 'hello coder army']
console.log(typeof lateststring);  //object
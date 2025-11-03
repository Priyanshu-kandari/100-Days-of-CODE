//how to create object
const obj ={
    name : "rohit",
    gender: "male",
    age:30
}

const arr = ["rohit","Male",30]

console.log(obj);  //{ name: 'rohit', gender: 'male', age: 30 }
console.log(arr);  //[ 'rohit', 'Male', 30 ]

const insta = {
    username: "preyanshuuu", 
    gender: "male",  
    age:18,
    undefined:20,
    null:50
}

console.log(insta.username);  //preyanshuuu
console.log(insta.gender);  //male
console.log(insta["gender"]);  //male
console.log(insta);  //{ username: 'preyanshuuu', gender: 'male', age: 18 }
console.log(insta.undefined);//20
console.log(insta[undefined]); //20
console.log(insta.null);  //50
console.log(insta[null]);  //50



//second method to create object
const person = new Object();
console.log(person);  //{}
//property add
person.name = "Rohit"
person.age = 18
person.gender = "male"
console.log(person);  //{ name: 'Rohit', age: 18, gender: 'male' }

//delete
delete person.age;
console.log(person);  //{ name: 'Rohit', gender: 'male' }

//update
person.name = "Mohit"
console.log(person);  //{ name: 'Mohit', gender: 'male' }


//third method
class people{
    constructor(n,a,g){
        this.name = n;
        this.age = a;
        this.gender = g;
    }
}

let per1 = new people("Rohit",20,"male");
let per2 = new people("mojit",15,"male")
console.log(per1);  //people { name: 'Rohit', age: 20, gender: 'male' }
console.log(per2);  //people { name: 'mojit', age: 15, gender: 'male' }

//common methods on objects
let obj1 = {
    name: "rohit",
    age:12,
    account_balance:420,
    gender:"male"
}


//keys and enteries
let keys = Object.keys(obj1)
console.log(keys);  //[ 'name', 'age', 'account_balance', 'gender' ]

let enteries = Object.entries(obj1)
console.log(enteries);  //[[ 'name', 'rohit' ],[ 'age', 12 ],[ 'account_balance', 420 ],[ 'gender', 'male' ]]


//assign use case
const obj10 = {a:1,b:2}
const obj20 = {c:2,d:5}

const obj3 = Object.assign({},obj10,obj20)
console.log(obj3)  //{ a: 1, b: 2, c: 2, d: 5 }

//spread operator
const obj5 = {...obj10,...obj20}
console.log(obj5); //{ a: 1, b: 2, c: 2, d: 5 }
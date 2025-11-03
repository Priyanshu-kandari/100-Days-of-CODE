//shallow copy
let obj = {
    a:1,
    b:2
}

let obj1 = obj
obj1.a=10;
console.log(obj,obj1);  //{ a: 10, b: 2 } { a: 10, b: 2 }



//deep copy
let obj2 = {
    a:1,
    b:2
}
let obj3 = structuredClone(obj2)
obj3.a=10;
console.log(obj2,obj3);  //{ a: 1, b: 2 } { a: 10, b: 2 }


//nested obj
const user = {
    name: "rohit",
    balance: 420,
    address: {
        pincode: 246149,
        city: "kotdwar"
    }
}
console.log(user.address)  //{ pincode: 246149, city: 'kotdwar' }
console.log(user.address.city);  //kotdwar

//assign special case
//the copy created by assign function acts noramlly as a deep copy but if object is nested obj it will act as shallow copy

const user2 = Object.assign({},user)
console.log(user2);  //{name: 'rohit',balance: 420,address: { pincode: 246149, city: 'kotdwar' }}

user2.address.city = "delhi"
console.log(user);  //{name: 'rohit',balance: 420,address: { pincode: 246149, city: 'delhi' }}



//Object.freeze
//Makes an object completely immutable — no adding, deleting, or changing any property.
const obj5 = { name: "Priyanshu", age: 20 };
Object.freeze(obj5);

obj5.name = "Aman";  // ❌ No effect
obj5.city = "Delhi"; // ❌ No effect
delete obj5.age;     // ❌ No effect

console.log(obj5); // { name: "Priyanshu", age: 20 }


//Object.Seal
//Locks an object’s structure (no adding or deleting), but allows updating existing values.
const person = { name: "Priyanshu", age: 20 };
Object.seal(person);

person.age = 25;     // ✅ Works
person.city = "Delhi"; // ❌ No effect
delete person.name;    // ❌ No effect

console.log(person); // { name: "Priyanshu", age: 25 }


//destructruing of an object
let obj6 = {
    name: "rohit",
    money: 4.0,
    balance: 360,
    age: 20,
};

const {money,age} = obj6
console.log(money,age);  //4 20

//renaming keys
const {money: paisa,age:umar} = obj6
console.log(paisa,umar);  //4 20

//rest operator

let obj7 = {
    name: "shobhit",
    cash: 1000.0,
    balance: 570,
    gullyno: 29,
};

const {cash,gullyno,...obj8} = obj7
console.log(obj8);  //{ name: 'shobhit', balance: 570 }
console.log(cash,gullyno);  //1000 29


//Destrructuring of an array
const arr = [3,2,1,6,5];
const[first, second, , fourth] = arr
console.log(first,second ,fourth);  //3 2 6
const[a,b,...c] = arr
console.log(c);  //[ 1, 6, 5 ]

let obj10 = {
    name: "Aman",
    exp :18,
    arr: [3,2,1,6,5],
    address:{
        state: "uttar pradesh",
        city: "ghaziabaad",
        pincode: "201309"
    }
}

const { name, exp , address:{pincode},arr:[x],...ghee} =  obj10
console.log(pincode);  //201309
console.log(name);  //aman
console.log(exp);  //18
console.log(x); //3
console.log(ghee);  //{}


let user10 = {
    name: "Rohit",
    amount: 420,
    greet: function(){
        console.log("Hello COder Army");
    },
    meet: function(){
        return 20;
    }
}

user10.greet()
console.log(user10.meet());

let newobj = {
    name:"Rohit",
    amount:420,
    greet: function(){
        return 10;
    }
}


console.log(newobj.toString())
// arr is an object
let arr10 = [2,3,1,8];
arr10.push(10);

let obj = {};
obj.name = "rohit";
console.log(obj);
//key value writable enumerable configurable
console.log(Object.getOwnPropertyDescriptor(obj,"name"));
// {
//   value: 'rohit',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
obj.name = "kandari"
console.log(obj);  //{ name: 'kandari' }


//writable = true means value ko change kiya ja sakta hai
let obj1 = {};
Object.defineProperty(obj1,"name",{
    value:"priyanshu",
    writable:false,  //it will not let change any value of property
    enumerable:true,
    configurable:true
})
console.log(obj1);  //{ name: 'priyanshu' }

obj1.name = "mohit";
console.log(obj1);  //{ name: 'priyanshu' }


//configurable = true means writable aur enumerable ki value ko change kiya jaa sakta hai
let obj2 = {};
Object.defineProperty(obj2,"name",{
    value:"priyanshu",
    writable: true,  //it will let us to change the value  
    enumerable:true,
    configurable:false  //it will not let change any value of writable & enumerable
})
console.log(obj2);  //{ name: 'priyanshu' }


Object.defineProperty(obj2,"name",{
    writable:false,  //writable from true → false is possible. You cannot do the reverse (false → true),
})

obj2.name = "mohit";
console.log(obj2); //{ name: 'priyanshu' }



let obj3 = {};
Object.defineProperty(obj3,"name",{
    value:"priyanshu",
    writable: false,  //it will let us to change the value  
    enumerable:true,
    configurable:false  //it will not let change any value of writable & enumerable
})
console.log(obj3);  //{ name: 'priyanshu' }


// Object.defineProperty(obj3,"name",{
//     writable:true,  //writable from true → false is possible. You cannot do the reverse (false → true),
// })

obj3.name = "mohit";
// console.log(obj3); //error


//enumerable = true means while using for in loop it will get printed, if it is false it will not
const customer = {
    name:"priyanshu",
    age: 18,
    accountno: 68686868,
    balance: 2000

}

Object.defineProperty(customer,"name",{
    enumerable:false
})


for(let key in customer)
    console.log(key);
// age
// accountno
// balance

let customer2 = Object.create(customer);
customer2.city = "haridwar";
customer2.place = "delhi";

for(let key in customer2)
    console.log(key);
// city
// place
// age
// accountno
// balance


//in obeject.prototpye, the property have enumerable false that's why they never get printed
console.log(Object.getOwnPropertyDescriptor(Object.prototype,"toString"));
// {
//   value: [Function: toString],
//   writable: true,
//   enumerable: false, // this enumerable false is the reason its never get printed
//   configurable: true
// }
let obj = {
    name: "rohan",
    age: 23,
    gender: "male",
    city: "kotdwaar"
}

//for in loop, i can itterate over keys in an object
for(let key in obj)
{
    console.log(key, obj[key]);
    // name rohan
    // age 23
    // gender male
    // city kotdwaar
}

Object.keys(obj)
console.log(Object.keys(obj));  //[ 'name', 'age', 'gender', 'city' ]

let obj2 = Object.create(obj); // inheriting the obj keys in obj2
obj2.money = 420;
obj2.id = 123
console.log(obj2);  //{ money: 420, id: 123 }
console.log(obj2.name);  //rohan
console.log(Object.keys(obj2));  //[ 'money', 'id' ]  //doesnt shows inherit keys
for(let key in obj2){
    console.log(key);
    // money
    // id
    // name
    // age
    // gender
    // city  //showing all property even the inherut ones also
}

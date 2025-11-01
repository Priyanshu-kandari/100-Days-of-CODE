let a = 10;
let b = a;
b = 30;
console.log(b);
console.log(a);

//Primitive datatype vs Non Primitive datatype
//Primitive datatype: Immutable
//non Primitive Datatype: Mutable

//object example
let obj1 ={
    id:20,
    naming:"rohit"
}

let obj2 = obj1;
console.log(obj1);
console.log(obj2);
obj2.id = 30;
console.log(obj1);
console.log(obj2);
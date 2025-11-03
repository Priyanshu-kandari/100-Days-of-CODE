//function
function greet(){
    console.log("hello Haanji namaste");
}

greet();  //hello Haanji namaste
greet();  //hello Haanji namaste
greet();  //hello Haanji namaste


//sum
function sum(a,b){
    console.log(a+b);
}
sum(10,12)  //22
sum(210,650)  //860


//multiplication
function multi(a,b){
    return a*b
}
c = multi(10,20)
console.log(c);  //200


//arrow function
const fun = ()=>{
    console.log("hello coder");
}
fun()

//no need of writing return keyword and using curly braces
const sub = (a,b)=> a-b;
console.log(sub(10,5)); //5

//when parameter is one dont need to put brackets
const cube = a => a*a*a
console.log(cube(2)); //8


const add = function(...a){
    console.log(a);
}
add(2,2,3)  //[ 2, 2, 3 ]



let obj = {
    name:"kandari",
    age:20,
    amount:420
}

function objop({age,name}){
    console.log(age,name);
}
objop(obj)  //20 kandari

function deleteobj(a){
    delete a.amount;
    console.log(a);
}
deleteobj(obj) //{ name: 'kandari', age: 20 }
console.log(obj); //{ name: 'kandari', age: 20 }

const arr=[1,2,3,3]
let objex = {
    name:"mohiut",
    class:12
}
objex.__proto__ = arr 
console.log(objex);  //Array { name: 'mohiut', class: 12 }
// objex = Object.create(arr) this over writes
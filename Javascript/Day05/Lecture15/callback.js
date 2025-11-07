function names(fun){
    console.log("hello I am name");
    fun();
}

function greet(){
    console.log("i am call back function");
}

names(greet)
// hello I am name
// i am call back function

names(function(){
    console.log("i am callback func");
})
// hello I am name
// i am callback func

names(()=>{
    console.log("i am callback function");
})
//hello I am name
// i am callback function

function fetchdata(){
    console.log("i am fetching data");
}

setInterval(fetchdata,100000)


//for each
let arr = [1,2,3,4,5];
// first argument = number
// second argument = index
// third argument = array ko bhi pass
arr.forEach((num,index,a)=>console.log(num,index,a))
// 1 0 [ 1, 2, 3, 4, 5 ]
// 2 1 [ 1, 2, 3, 4, 5 ]
// 3 2 [ 1, 2, 3, 4, 5 ]
// 4 3 [ 1, 2, 3, 4, 5 ]
// 5 4 [ 1, 2, 3, 4, 5 ]


//filter
let arr1 = [10,22,33,44]
const result = arr1.filter((num)=>{
    return num%2==0
})

console.log(result);

const students = [
    {
        name: "rohan",
        age: 32,
        marks: 70,
    },{
        name: "mohan",
        age: 12,
        marks: 10,
    },{
        name: "sohan",
        age: 32,
        marks: 110,
    },{
        name: "tohan",
        age: 62,
        marks: 210,
    }
]

const result1 = students.filter(obj=>obj.marks>10)
console.log(result1);


//map
const arr2 = [1,2,3,4];
const result2 = arr.map(n=>{
         return n*n
        })

console.log(result2);


const arr10 = [10,20,30,40,50,60,70,80,90,100]
const result10 = arr10.filter(num=>num>50).map(num=>num*2).map(num=>num*num)
console.log(result10);
const arr = [2,35,1,8,9,"himanshu"]
console.log(arr);
console.log(arr.length); //6
console.log(arr[0]);  //2
console.log(arr.at(2));  //1
//at is latest , it can also take negative index


const newarr = structuredClone(arr)
console.log(newarr);

//push, add in last
arr.push(30)
console.log(arr)  //[ 2, 35, 1, 8, 9, 'himanshu', 30 ]

//pop, remove from last
arr.pop()
console.log(arr);  //[ 2, 35, 1, 8, 9, 'himanshu' ]

//unshift, add element in start
arr.unshift(15)
console.log(arr);  //[ 15, 2, 35, 1, 8, 9, 'himanshu' ]

//shift, delete element from start
arr.shift()
console.log(arr);  //[ 2, 35, 1, 8, 9, 'himanshu' ]

//delete
delete arr[0]
console.log(arr);  //[ <1 empty item>, 35, 1, 8, 9, 'himanshu' ]


//indexOf
const arr1 = [2,35,1,8,9,"himanshu",8]
console.log(arr1.indexOf(8));  //3
console.log(arr1.lastIndexOf(8));  //6

//slice
console.log(arr.slice(2,4));  //[ 1, 8 ]
console.log(arr);  //[ <1 empty item>, 35, 1, 8, 9, 'himanshu' ]


//splice, splice changes happen in original array
console.log(arr.splice(2,4));  //[ 1, 8, 9, 'himanshu' ]
console.log(arr);  //[ <1 empty item>, 35 ]

//splice(starting_index,Total_element_Delete,add value)
const arr2 = [1,2,3,4,5];
console.log(arr2);  //[ 1, 2, 3, 4, 5 ]
console.log(arr2.splice(2,0,60));  //[]
console.log(arr2);   //[ 1, 2, 60, 3, 4, 5 ]

//tostring
console.log(arr2.toString());  //1,2,60,3,4,5

//join
console.log(arr2.join("*"));  //1*2*60*3*4*5


//concat
let arr10 = [1,2,3,4]
let arr20 = [9,8,7,6]
let arr25 = [1254,254]
// let arr30 = arr10.concat(arr20,arr25)
// console.log(arr30);

arr10.push(arr20);
console.log(arr10);  //[ 1, 2, 3, 4, [ 9, 8, 7, 6 ] ]
console.log(arr10[4]);  //[ 9, 8, 7, 6 ]
console.log(arr10[4][2]); //7


//2d array
let arr2d = [[1,2,3],[4,5,6],[7,8,9]]
console.log(arr2d[1][0]);  //4 

//flat
let arr40 = arr2d.flat()
console.log(arr40);  //[1, 2, 3, 4, 5, 6, 7, 8, 9]

let abc = [2,1,4,1];
console.log(Array.isArray(abc));  //true

let ac = new Array(10);
console.log(ac.length);  //10
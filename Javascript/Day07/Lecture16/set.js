// A Set is a special type of object in JavaScript that stores unique values only.
// 👉 It automatically removes duplicates for you.
const set1 = new Set([10,20,10,20,10,20,10]);
set1.add(4);
set1.add(10)
set1.add("kandari")
console.log(set1);  //Set(4) { 10, 20, 4, 'kandari' }
console.log(typeof set1);  //object
console.log(set1.size);  //4


//delete
set1.delete(4)
console.log(set1);  //Set(3) { 10, 20, 'kandari' }


const user_id = new Set(["rohit_negi9","mohit.99","hero.99","hero.99"]);
console.log(user_id);  //Set(3) { 'rohit_negi9', 'mohit.99', 'hero.99' }
user_id.clear();
console.log(user_id);  //Set(0) {}


//array to set
let arr = [10,20,30,40,50,60,20,30,40,50,60];
const set2 = new Set(arr)
console.log(set2);  //Set(6) { 10, 20, 30, 40, 50, 60 }

//set to array
// arr = [set2]  //[ Set(6) { 10, 20, 30, 40, 50, 60 } ]  not needed
arr = [...set2]
console.log(arr);  //[ 10, 20, 30, 40, 50, 60 ]



//union of sets
let set3 = new Set([...set1,...set2]) 
console.log(set3);  //Set(7) { 10, 20, 'kandari', 30, 40, 50, 60 }


//intersection
console.log(set1);  //Set(3) { 10, 20, 'kandari' }
console.log(set2);  //Set(6) { 10, 20, 30, 40, 50, 60 }
const result = [...set1].filter((num)=>set2.has(num))
console.log(result);  //[ 10, 20 ]


//itterate over set
//for of
for(let value of set1){
    console.log(value);
}

//for each
set1.forEach((value)=> console.log(value))


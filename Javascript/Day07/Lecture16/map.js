// Map — special key-value data structure

// A Map is like an Object, but more powerful:

// Keys can be any type (objects, arrays, etc.)

// Maintains insertion order

// Has built-in methods: set(), get(), has(), delete()

const myMap = new Map();
myMap.set('name', 'Priyanshu');
myMap.set('age', 21);
myMap.set(true, 'This is boolean key');
myMap.set(100, 'This is number key');

console.log(myMap);

// Map(4) {
//   'name' => 'Priyanshu',
//   'age' => 21,
//   true => 'This is boolean key',
//   100 => 'This is number key'
// }

myMap.delete(100);
console.log(myMap);  //{
//   'name' => 'Priyanshu',
//   'age' => 21,
//   true => 'This is boolean key'
// }
console.log(myMap.size);//3

const map1 = new Map([[4,"rohit"],["Moahn","rohan"],[30,9], [63,78]]);

console.log(map1);  ////Map(4) { 4 => 'rohit', 'Moahn' => 'rohan', 30 => 9, 63 => 78 }
// for of loop
for(let [key,value] of map1)
    console.log(key, value);  
    // 4 rohit
    // Moahn rohan
    // 30 9
    // 63 78   

console.log(map1[4]);  //undefined

// Object:
// keys: string or symbol
// maps:
// keys:number, string, object


// Javascript code kaise execute hota hai......
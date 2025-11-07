//reduce
//const result = arr.reduce(callback func,intialization)

const numbers = [1, 2, 3, 4, 5];
const result = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(result); // 15


// example
const fruits = ['apple', 'banana', 'apple','apple', 'banana', 'apple','apple', 'banana', 'apple'];
const result1 = fruits.reduce((acc,cur)=>{
    if (acc[cur]) acc[cur]++;
    else acc[cur]=1 
    return acc
},{})
console.log(result1);
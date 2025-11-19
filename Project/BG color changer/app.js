//low approach
// const red = document.getElementById("red");
// const green = document.getElementById("green");
// const blue = document.getElementById("blue");
// const orange = document.getElementById("orange");
// const purple = document.getElementById("purple");
// const body = document.querySelector("body")

// red.addEventListener("pointerdown",()=>{
//     body.style.backgroundColor = "red"
// })

// blue.addEventListener("pointerdown",()=>{
//     body.style.backgroundColor = "blue"
// })

// green.addEventListener("pointerdown",()=>{
//     body.style.backgroundColor = "green"
// })

// orange.addEventListener("pointerdown",()=>{
//     body.style.backgroundColor = "orange"
// })

// purple.addEventListener("pointerdown",()=>{
//     body.style.backgroundColor = "purple"
// })


//brainy approach
// const body = document.querySelector("body")
// const button = document.querySelectorAll("button");
// console.log(button);
// button.forEach((el) => {
//     el.addEventListener("pointerdown",()=>{
//         body.style.backgroundColor = el.id  
//     })
// });

//more optimised code
const body = document.querySelector("body")
body.addEventListener("pointerdown",(Event)=>{
    if(Event.target.tagName === "BUTTON"){
        body.style.backgroundColor = Event.target.id
    } 
})
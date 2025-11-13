// Select element by ID
const id = document.querySelector('#first');
id.innerHTML = "Hello Money"; // change content

// Select all elements with class 'header1' and style them
const id2 = document.querySelectorAll(".header1");
id2.forEach(el => {
  el.style.backgroundColor = "pink";
  el.style.padding = "10px";
  el.style.borderRadius = "10px";
});

// Get all <h1> tags
const obj3 = document.getElementsByTagName("h1");
console.log("All <h1> tags:", obj3);

// Select the <ul> element
const obj4 = document.querySelector("ul");
console.log("UL Element:", obj4);

// Display DOM relationships
console.log("All child nodes (includes text):", obj4.childNodes);
console.log("Second child node (may be a <li>):", obj4.childNodes[1]);
console.log("Only element children:", obj4.children);
console.log("First child node (can be text):", obj4.firstChild);
console.log("Last child node (can be text):", obj4.lastChild);
console.log("First element child:", obj4.firstElementChild);
console.log("Last element child:", obj4.lastElementChild);

// Styling <ul> children alternately
const listItems = obj4.children;
for (let i = 0; i < listItems.length; i++) {
  if (i % 2 === 0) {
    listItems[i].style.backgroundColor = "yellow";
  } else {
    listItems[i].style.backgroundColor = "lightgreen";
  }
  listItems[i].style.color = "black";
  listItems[i].style.padding = "8px";
  listItems[i].style.margin = "5px";
  listItems[i].style.borderRadius = "5px";
}

// Show parent of <ul>
console.log("Parent element of <ul>:", obj4.parentElement);

// ----------------------------
// 👇 SIBLING SELECTOR PART 👇
// ----------------------------

// nextElementSibling → next element on same level
const nextSibling = id.nextElementSibling;
console.log("Next sibling of #first:", nextSibling);

// Change next sibling’s color (that’s your <h2>)
nextSibling.style.color = "cyan";

// previousElementSibling → previous element on same level
const prevSibling = obj4.previousElementSibling;
console.log("Previous sibling of <ul>:", prevSibling);

// Style previous sibling (<h2>) background
prevSibling.style.backgroundColor = "purple";
prevSibling.style.color = "white";

// Bonus: You can also navigate multiple levels
console.log("Next sibling of <h2> (should be <ul>):", nextSibling.nextElementSibling);

// ----------------------------------------------
// 1. Function to create a <li> element and add to the list
// ----------------------------------------------
function AttachInList(text) {
    const element = document.createElement("li"); // Create <li>
    element.innerHTML = text;                    // Add text inside <li>

    const parent = document.querySelector("#container"); // Select <ul>
    parent.appendChild(element);                           // Add <li> at end
}

// Adding 2 list items using our function
AttachInList("Git");
AttachInList("hello");


// ----------------------------------------------
// 2. Creating a simple TEXT NODE (not a tag)
// ----------------------------------------------
const textNode = document.createTextNode("hello coder"); // Create plain text
const parent = document.querySelector("#container");      // Select <ul>
parent.append(textNode);                                  // Add text at end


// ----------------------------------------------
// 3. Creating an ATTRIBUTE NODE (old style)
// ----------------------------------------------
const attr1 = document.createAttribute("id"); // Create attribute: id=""
attr1.value = "first";                        // Set its value: id="first"


// ----------------------------------------------
// 4. Accessing FIRST <li> and setting attribute
// ----------------------------------------------
const firstListItem = document.querySelector("li"); // Select 1st <li>
firstListItem.setAttributeNode(attr1);              // Apply the id="first"


// ----------------------------------------------
// 5. Creating & setting attribute to SECOND <li>
// ----------------------------------------------
const attr2 = document.createAttribute("id");
attr2.value = "second";

parent.children[1].setAttributeNode(attr2); // children[1] = second <li>


// ----------------------------------------------
// 6. Modern way of adding attribute (Recommended)
// ----------------------------------------------
document.querySelectorAll("#container li")[2]
        .setAttribute("id", "third");  // Set id="third" for 3rd <li>


// ----------------------------------------------
// 7. Access BODY attribute
// ----------------------------------------------
const bodyElement = document.getElementsByTagName("body")[0];  
console.log(bodyElement.getAttribute("style"));  // Print inline style


// ----------------------------------------------
// 8. Set, Update, Remove attributes
// ----------------------------------------------
bodyElement.setAttribute("class", "body");       // Add class
bodyElement.setAttribute("class", "priyanshu");  // Change class
bodyElement.removeAttribute("class");            // Remove class


// ----------------------------------------------
// 9. Adding nodes into the DOM in different ways
// ----------------------------------------------
const newItem = document.createElement("li");
newItem.innerHTML = "TS";

// Add at the START
parent.prepend(newItem);

// Add at the END (moves the same element to the end)
parent.append(newItem);


// ----------------------------------------------
// 10. insertBefore(): Insert a node before another
// ----------------------------------------------
const secondChild = parent.children[1]; // 2nd <li>
parent.insertBefore(newItem, secondChild);


// ----------------------------------------------
// 11. replaceChild(): Replace an existing node
// ----------------------------------------------
parent.replaceChild(newItem, secondChild);


// ----------------------------------------------
// 12. insertAdjacentHTML(): Insert HTML directly
// ----------------------------------------------
parent.insertAdjacentHTML("beforeend", "<li>TSS</li>");


// ----------------------------------------------
// 13. insertAdjacentElement(): Insert real element
// ----------------------------------------------
const newDiv = document.createElement("div");
newDiv.innerHTML = "hello paaaji";

parent.insertAdjacentElement("beforeend", newDiv);


// ----------------------------------------------
// 14. Remove a node from the DOM
// ----------------------------------------------
console.log(firstListItem); // The first <li>
firstListItem.remove();      // Delete the first <li>

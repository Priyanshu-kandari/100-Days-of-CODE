// 🧩 What is this?

// this ek special keyword hai jo current execution context (yaani jis jagah par code chal raha hai) ko refer karta hai.
// Simple words mein — "this batata hai kaun bol raha hai."

// ⚙️ The value of this depends on HOW the function is called — not where it is written.

// Let’s go case-by-case 👇

// 🏠 1. Global Scope (non–strict mode)
console.log(this);
// 👉 Browser mein: this = window object
// 👉 Node.js mein: this = {} (empty object)


// 🚶‍♂️ 2. Inside a Regular Function
function show() {
  console.log(this);
}
show();
// Non–strict mode → this = window
// Strict mode ('use strict') → this = undefined


// 🧍 3. Inside an Object Method
const user = {
  name: "Priyanshu",
  greet() {
    console.log(this.name);
  },
};
user.greet();  // Priyanshu
// ✅ this refers to the object that called the method → here it’s user.



// 📤 4. Losing this
const user1 = {
  name: "Priyanshu",
  greet() {
    console.log(this.name);
  },
};

const ref = user1.greet;
ref(); // ❌ undefined (because it's not called with user)
// 👉 Jab function ko reference ke form mein call karte ho, this kho jaata hai.



// 🧲 5. Arrow Functions (=>)
// Arrow functions don’t have their own this.
// They take this from their surrounding (lexical) scope.

const obj = {
  name: "Priyanshu",
  show: () => {
    console.log(this.name);
  }
};
obj.show(); // ❌ undefined (arrow took `this` from global, not obj)


// 🧠 6. In Constructors (with new)
function Person(name) {
  this.name = name;
}

const p1 = new Person("Priyanshu");
console.log(p1.name); // ✅ Priyanshu
// 👉 When you use new,
// this points to the newly created object.



// 💪 7. Using call(), apply(), and bind()
// You can manually control what this refers to 👇

function greet() {
  console.log(`Hello ${this.name}`);
}

const user2 = { name: "Priyanshu" };

greet.call(user2);   // Hello Priyanshu
greet.apply(user2);  // Hello Priyanshu

const greetUser2 = greet.bind(user2);
greetUser2();        // Hello Priyanshu
// ✅ call, apply, and bind help you explicitly set the value of this.



// 🧭 Summary Table
// Situation     	                     Value of this
// Global scope	                     window (browser)
// Regular function (non-strict)	     window
// Regular function (strict)	         undefined
// Object method	                     That object
// Arrow function	                     Parent scope’s this
// Constructor function                 Newly created object
// call / apply / bind	                 Explicitly set value
✅ 1. Async–Await ka basic meaning

async: Function ko promise-returning function bana deta hai.

await: Promise ke resolve hone ka wait karta hai.

👉 Simple:
"await = ruk jao"
"resolve = chalo aage"

✅ 2. async function ke andar hi await use hota hai

Example:

async function myFunc() {
    await somePromise();
}


await kabhi bhi async function ke bahar nahi likh sakte.

✅ 3. await execution ko pause karta hai

Jab code ye dekhta hai:

await paymentStatus()


→ Code yahi ruk jata hai
→ Jab tak paymentStatus() ka promise resolve nahi hota
→ Fir next line chalti hai

✅ 4. async–await makes code look like normal step-by-step

Pehle Promise chaining aise hoti thi:

step1()
  .then(step2)
  .then(step3)
  .then(step4)


Ab simply:

await step1();
await step2();
await step3();


Much cleaner.

✅ 5. Async–Await = Synchronous-looking code, but still Asynchronous

Matlab code sequence-wise dikhta hai,
par background mein promise + setTimeout async hi chalte hain.

✅ 6. async function always returns a Promise

Agar tum likho:

async function test() {
    return "hello";
}


Actually return hota hai:

Promise.resolve("hello")

✅ 7. Error handling is easy

Try-catch laga sakte ho:

async function work() {
  try {
    await step1();
    await step2();
  } catch(err) {
    console.log("Error aagaya:", err);
  }
}

✅ 8. When to use Async–Await

Use it when:

✔ Multiple steps one-by-one chalane ho
✔ Code ko clean banana ho
✔ Promise chaining avoid karna ho

✅ 9. When NOT to use Async–Await

❌ Jab parallel work karna ho
Tab Promise.all() better.

⭐ Summary (One-liners)

async → "this function returns a Promise"

await → "wait here until Promise resolves"

resolve → "done, move to next step"

reject → "error occurred"

Looks synchronous but works asynchronously
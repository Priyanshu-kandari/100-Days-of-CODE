// Select the form element
const form = document.querySelector('form');

// ------------------------------
// FORM EVENT LISTENERS (REFERENCE)
// ------------------------------

// 1. 'input' → triggers on every keystroke in input fields
// form.addEventListener('input', (event) => {
//     console.log(event.target.value);
// });

// 2. 'change' → triggers when an input loses focus AFTER a change
// form.addEventListener('change', (event) => {
//     console.log(event.target.value);
// });

// 3. 'focusin' → fires when any child input gets focus
// form.addEventListener('focusin', (event) => {
//     console.log(event.target.value);
// });

// 4. 'focusout' → fires when any child input loses focus
// form.addEventListener('focusout', (event) => {
//     console.log(event.target.value);
// });

// 5. 'dblclick' → triggers on double-click inside the form
// form.addEventListener('dblclick', (event) => {
//     console.log("Double clicked");
// });

// 6. 'reset' → fires when form is reset
// form.addEventListener('reset', (event) => {
//     console.log("Form Reset");
// });


// ------------------------------
// HANDLE FORM SUBMIT
// ------------------------------
form.addEventListener('submit', (event) => {
    
    // Prevents page refresh
    event.preventDefault();

    // Collect all form fields and their values
    const data = new FormData(form);

    // Iterate through FormData
    for (let [key, value] of data.entries()) {
        console.log(key, value); // key = input name, value = user input
    }

    // If needed:
    // console.log(Array.from(data.keys()));   // Only field names
    // console.log(Array.from(data.values())); // Only field values


    /*
    Example:
    <input name="first" value="John">
    <input name="last" value="Doe">

    Output:
    first John
    last Doe
    */

});
 
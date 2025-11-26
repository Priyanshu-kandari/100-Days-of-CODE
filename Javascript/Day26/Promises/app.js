//zomato
const orderDetail = {
    orderId: 123123,
    food:["Pizza","biryani","coke"],
    cost: 620,
    customer_name: "Rohit",
    customer_location: "Dwarka",
    restaurant_location: "Delhi"
}

// ---------------------
// 1️⃣ PAYMENT
// ---------------------
function paymentStatus(sampleorderDetail){
    return new Promise((resolve) => {
        console.log(`order cost: ${sampleorderDetail.cost}`);

        setTimeout(() => {
            console.log("Payment done");
            resolve(sampleorderDetail);
        }, 3000);
    });
}


// ---------------------
// 2️⃣ FOOD PREPARATION
// ---------------------
function foodStatus(sampleorderDetail){
    return new Promise((resolve) => {
        console.log(`Preparation of ${sampleorderDetail.food}`);

        setTimeout(() => {
            console.log("Your order is prepared");
            resolve(sampleorderDetail);
        }, 3000);
    });
}


// ---------------------
// 3️⃣ PICKUP
// ---------------------
function pickOrder(sampleorderDetail){
    return new Promise((resolve) => {
        console.log(`Rider is on his way to pick from ${sampleorderDetail.restaurant_location}`);

        setTimeout(() => {
            console.log("Rider has picked your order");
            resolve(sampleorderDetail);
        }, 3000);
    });
}


// ---------------------
// 4️⃣ DELIVERY
// ---------------------
function deliverOrder(sampleorderDetail){
    return new Promise((resolve) => {
        console.log(`Rider is reaching ${sampleorderDetail.customer_location}`);

        setTimeout(() => {
            console.log("Order delivered");
            resolve("Done");
        }, 3000);
    });
}


// ---------------------
// 🚀 PROMISE CHAIN
// ---------------------

paymentStatus(orderDetail)
    .then(foodStatus)
    .then(pickOrder)
    .then(deliverOrder)
    .then(() => {
        console.log("All steps completed ✔");
    });
